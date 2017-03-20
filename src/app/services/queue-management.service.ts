import {Injectable, EventEmitter} from '@angular/core';
import {Caller} from "../classes/Caller";
import {Representative} from "../classes/Representative";
import {Call} from "../classes/Call";
import {Observable} from "rxjs";

@Injectable()
export class QueueManagementService {

  private queue: Caller[];
  private representatives: Representative[];
  private finishedCalls: {[repName: string]: Call[]};
  private _isStressTest: boolean;

  public callRegistered: EventEmitter<Representative> = new EventEmitter<Representative>();

  public autumaticCallersAddChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  public representativesChanged: EventEmitter<Representative[]> = new EventEmitter<Representative[]>()

  constructor() {
    this.queue = [];
    this.finishedCalls = {};
    this.representatives = [];
  }

  findCallerByNameAndNumber(name: string, number: number): Observable<Caller> {
    return Observable.create(observer => {
      const caller = this.findCaller(name, number);// this.queue.find(c => c.name === name);
      observer.next(caller);
      observer.complete();
    });
  }

  findRepByCaller(caller: Caller): Observable<Representative> {
    return Observable.create(observer => {

      const representative = this.representatives.find(rep => rep.onCall
      && rep.onCall.caller === caller);


      observer.next(representative);
      observer.complete();
    });
  }

  registerCaller(caller: Caller): Observable<Caller> {
    return Observable.create(observer => {
      caller.number = this.queue.length + 1;
      caller.waitingSince = new Date();
      this.queue.push(caller);
      observer.next(caller);
      observer.complete();
    });
  }

  startCall(rep: Representative) {
    let newCall = new Call();
    const caller = this.queue[0];
    newCall.callStart = new Date();
    newCall.caller = caller;
    rep.onCall = newCall;

    this.queue.splice(0, 1);
    this.callRegistered.emit(rep);

  }

  finishCall(representative: Representative) {
    if (representative && representative.onCall) {
      representative.onCall.callEnd = new Date();
      if (!this.finishedCalls[representative.name]) {
        this.finishedCalls[representative.name] = [];
      }
      this.finishedCalls[representative.name].push(representative.onCall);
      representative.onCall = null;
    }
  }

  private stressTest() {
    this.registerCaller({name: 'TestCaller', waitingSince: new Date()})
      .subscribe(() => {

      });

    if (this._isStressTest) {
      setTimeout(() => this.stressTest(), 1000);
    }
  }

  stopStressTest() {
    this._isStressTest = false;
    this.autumaticCallersAddChanged.emit(this._isStressTest);

  }

  startStressTest() {
    this._isStressTest = true;
    this.stressTest();
    this.autumaticCallersAddChanged.emit(this._isStressTest);
  }


  getRepresentatives(): Observable< Representative[]> {
    return Observable.of(Object.assign([], this.representatives));
  }

  findCaller(callerName: string, callerNumber: number) {
    let caller: Caller = this.queue.find(c => c.name === callerName && c.number === callerNumber);

    if (!caller) {
      const rep = this.representatives.find(rep => rep.onCall &&
      rep.onCall.caller.name === callerName && rep.onCall.caller.number === callerNumber);
      if (rep) {
        caller = rep.onCall.caller;
      }
    }

    if (!caller) {
      for (let repName in this.finishedCalls) {
        if (this.finishedCalls.hasOwnProperty(repName)) {
          const call = this.finishedCalls[repName].find(c => c.caller.name === callerName
          && c.caller.number === callerNumber);
          if (call) {
            caller = call.caller;
            break;
          }

        }
      }
    }

    return caller;
  }

  setRepName(repName: string) {
    let rep = this.representatives.find(rep => rep.name === repName);

    if (!rep) {
      return repName;
    }
    let regExp = /[0-9]+/;
    let arr = regExp.exec(repName);
    if (arr && arr.length > 0) {
      let numString = arr[0];
      let num = +numString + 1;
      return this.setRepName(repName.replace(numString, '' + num));
    } else {
      return this.setRepName(repName + '0');
    }

  }

  registerRep(rep: Representative): Observable<Representative> {

    return Observable.create(observer => {
      rep.name = this.setRepName(rep.name);
      this.representatives.push(rep);
      this.representativesChanged.emit(Object.assign([], this.representatives));
      observer.next(rep);
      observer.complete();
    });

  }

  getRepByName(name: string): Observable<Representative> {
    return Observable.create(observer => {
      let rep = this.representatives.find(rep => rep.name === name);
      observer.next(rep);
      observer.complete();
    });
  }


  get queue$(): Observable<Caller[]> {
    return Observable.of(this.queue);
  }


}

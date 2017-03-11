import { Injectable } from '@angular/core';
import {Caller} from "../classes/Caller";
import {EventEmitter} from "@angular/core";
import {Representative} from "../classes/Representative";
import {Call} from "../classes/Call";

@Injectable()
export class UserService {

  private queue: Caller[];
  private representatives: Representative[];

  public queueChanged: EventEmitter<Caller[]> = new EventEmitter<Caller[]>();

  constructor() {
   this.queue = [];
   this.representatives = [];
  }

  registerCaller(caller: Caller){
      this.queue.push(caller);
      this.queueChanged.emit(this.getQueue());
  }

  startCall(rep: Representative, caller: Caller) {
      let newCall = new Call();
      newCall.callStart = new Date();

  }

  registerRep(rep: Representative){
    this.representatives.push(rep);
  }




  getQueue() {
      return Object.assign([], this.queue);
  }

}

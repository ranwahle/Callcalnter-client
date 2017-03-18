import {Component, OnInit} from '@angular/core';
import {QueueManagementService} from "../../services/queue-management.service";
import {Caller} from "../../classes/Caller";
import {ActivatedRoute} from "@angular/router";
import {Representative} from "../../classes/Representative";
import {appState} from "../../state/app.state";

@Component({
  selector: 'app-caller-screen',
  templateUrl: './caller-screen.component.html',
  styleUrls: ['./caller-screen.component.css']
})
export class CallerScreenComponent implements OnInit {

  private name: string;
  get caller(): Caller {
    return appState.callers.currentCaller;
  }

  get place() : number {
    return this.caller ?  appState.callers.callers.indexOf(this.caller) + 1
      : 0;
  }

  constructor(private queueManagementService: QueueManagementService,
              private route: ActivatedRoute) {
  }


  get callingRep(): Representative {
    let representatives = appState.representatives.representatives;

    return representatives.find(rep => rep.onCall && rep.onCall.caller === this.caller);
  }



  ngOnInit() {

    this.route.params.subscribe(param => {

      const foundCaller: Caller = appState.callers.callers.find(caller => caller.name === param['caller-name']
      && caller.number === +param['caller-number']);


      appState.callers.currentCaller = foundCaller || null;


    });


  }




  register() {
    const caller: Caller = new Caller();
    caller.name = this.name;
    this.queueManagementService.addCaller(caller);
    appState.callers.currentCaller = caller;
  }

}

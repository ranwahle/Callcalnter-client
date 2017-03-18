import {Component, OnInit, OnDestroy} from '@angular/core';
import {QueueManagementService} from "../../services/queue-management.service";
import {Representative} from "../../classes/Representative";
import {Caller} from "../../classes/Caller";
import {AppState, appState} from "../../state/app.state";

@Component({
  selector: 'app-manager-screen',
  templateUrl: './manager-screen.component.html',
  styleUrls: ['./manager-screen.component.css']
})

export class ManagerScreenComponent {

  private reps: Representative[];
  private queue: Caller[];
  public appState: AppState;


  private get representatives(): Representative[] {
    return appState.representatives.representatives;
  }


  constructor(private queueManagementService: QueueManagementService) {
    //let  appState = observable({appState: new AppState()});
    this.reps = appState.representatives.representatives;
    this.queue = appState.callers.callers;
    this.appState = appState;

  }




  stopStressTest() {
    this.queueManagementService.stopStressTest();
  }

  startStressTest() {
    this.queueManagementService.startStressTest();
  }


}

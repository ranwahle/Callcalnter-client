import {Component, OnInit, OnDestroy} from '@angular/core';
import {QueueManagementService} from "../../services/queue-management.service";
import {Representative} from "../../classes/Representative";
import {Caller} from "../../classes/Caller";
import {AppState, appState} from "../../reducers/app.reducer";
import {observable} from "mobx";
// import {AppStore} from "../../app.store";
// import {RepsTestActionsFactory} from "../../actions/repTests.actions";

@Component({
  selector: 'app-manager-screen',
  templateUrl: './manager-screen.component.html',
  styleUrls: ['./manager-screen.component.css']
})

export class ManagerScreenComponent implements OnInit, OnDestroy {

  private reps: Representative[];
  private queue: Caller[];
  private isStressTesting: boolean;
  private representatives: Representative[];

  constructor(private queueManagementService: QueueManagementService) {
      //let  appState = observable({appState: new AppState()});
      this.reps = appState.representatives.representatives;
      this.queue = appState.callers.callers;
  }

  ngOnDestroy() {
 //   this.isStressTesting = false;
  }

  ngOnInit() {
    this.queue.push(new Caller());
    // this.queueManagementService.getRepresentatives().subscribe(reps => this.reps = reps);
    // this.queueManagementService.representativesChanged.subscribe(
    //   reps => this.reps = reps
    // );

    // this.store.subscribe(() => {
    //   this.isStressTesting = this.store.state.isOnTest;
    //   this.queue = this.store.state.callers.callers;
    //   this.representatives = this.store.state.representatives.representatives;
    // });
    //
    // this.queue = this.store.state.callers.callers;
    // this.isStressTesting = this.store.state.isOnTest;
    // this.representatives = this.store.state.representatives.representatives;
  }



  stopStressTest(){

    //this.store.dispatch(this.reptestActions.stopTest());
  }

  startStressTest(){
    //this.store.dispatch(this.reptestActions.startTest());
  }



}

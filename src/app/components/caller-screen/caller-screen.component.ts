import {Component, OnInit} from '@angular/core';
import {QueueManagementService} from "../../services/queue-management.service";
import {Caller} from "../../classes/Caller";
import {ActivatedRoute} from "@angular/router";
import {Representative} from "../../classes/Representative";
// import {AppStore} from "../../app.store";
// import {CallerActionsFactory} from "../../actions/caller.actions";

@Component({
  selector: 'app-caller-screen',
  templateUrl: './caller-screen.component.html',
  styleUrls: ['./caller-screen.component.css']
})
export class CallerScreenComponent implements OnInit {

  private name: string;
  private caller: Caller;

  constructor(private queueManagementService: QueueManagementService,
              private route: ActivatedRoute) {
  }

  private place: number;
  private callingRep: Representative;

  getDetailsFromStore(){
    // this.caller = this.store.state.callers.currentCaller;
    // this.findIndex(this.store.state.callers.callers);
  }

  ngOnInit() {
    this.getDetailsFromStore();
    // this.store.subscribe(() => this.getDetailsFromStore());

    this.route.params.subscribe(param => {

      const caller: Caller = {name: param['caller-name'], number: +param['caller-number']};
      // this.store.dispatch(this.callerActions.findCaller(caller));


    });




  }



  findIndex(queue: Caller[]) {
    if (!this.caller) {
      return;
    }

    const index = queue.findIndex(caller =>
    caller.name === this.caller.name && caller.number === this.caller.number);
    if (index >= 0) {
      this.place = index + 1;
    }

  }

  register() {
    const caller: Caller = new Caller();
    caller.name = this.name;
    // this.store.dispatch(this.callerActions.addCaller(caller));
    // this.store.dispatch(this.callerActions.findCaller(caller));

  }

}

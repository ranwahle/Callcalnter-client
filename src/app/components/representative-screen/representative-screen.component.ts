import {Component, OnInit} from '@angular/core';
import {QueueManagementService} from "../../services/queue-management.service";
import {Representative} from "../../classes/Representative";
import {ActivatedRoute} from "@angular/router";
import {Caller} from "../../classes/Caller";
import {appState} from "../../state/app.state";

@Component({
  selector: 'app-representative-screen',
  templateUrl: './representative-screen.component.html',
  styleUrls: ['./representative-screen.component.css']
})
export class RepresentativeScreenComponent implements OnInit {

  private name: string;

  constructor(private queueManagementService: QueueManagementService,
              private route: ActivatedRoute) {
  }

  private newRepresentative: boolean;

  private get rep(): Representative {
    return appState.representatives.currentRepresentative;
  }

  private get  queue(): Caller[] {
    return appState.callers.callers;
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.name = params['rep-name'];
      this.newRepresentative = this.name === 'undefined';
      if (this.newRepresentative) {
        this.name = '';
        appState.representatives.currentRepresentative = null;
      }
      else {
        appState.representatives.currentRepresentative =
          appState.representatives.representatives.find(rep => rep.name === this.name);
        //this.store.dispatch(this.representativeActions.getRepByName(this.name));

      }


    });


  }


  register() {
    const rep = new Representative();
    rep.name = this.name;
    appState.representatives.representatives.push(rep);
    appState.representatives.currentRepresentative = rep;
    // this.store.dispatch(this.representativeActions.registerNew(rep));

  }

  finishCall() {
    appState.finishCall(this.rep);//.rep.onCall = null;
    // this.store.dispatch(this.representativeActions.finishCall(this.rep));
  }

  takeCall() {
    if (!this.rep) {
      return;
    }
    appState.startCall(this.rep);


    // this.store.dispatch( this.representativeActions.startCall(this.rep));
  }

}

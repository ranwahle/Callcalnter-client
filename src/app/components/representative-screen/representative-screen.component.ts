import {Component, OnInit} from '@angular/core';
import {QueueManagementService} from "../../services/queue-management.service";
import {Representative} from "../../classes/Representative";
import {ActivatedRoute} from "@angular/router";
import {Caller} from "../../classes/Caller";
import {AppStore} from "../../app.store";
import {RepresentativeActionsFactory} from "../../actions/representatives.actions";

@Component({
  selector: 'app-representative-screen',
  templateUrl: './representative-screen.component.html',
  styleUrls: ['./representative-screen.component.css']
})
export class RepresentativeScreenComponent implements OnInit {

  private name: string;

  constructor(private store: AppStore,  private queueManagementService: QueueManagementService,
              private route: ActivatedRoute, private  representativeActions: RepresentativeActionsFactory) {
  }

  private newRepresentative: boolean;
  private rep: Representative;
  private queue: Caller[];

  ngOnInit() {
    this.queue = this.store.state.callers;
    this.rep = this.store.state.representatives.currentRepresentative;

    this.store.subscribe(() => {
      this.queue = this.store.state.callers;
      this.rep = this.store.state.representatives.currentRepresentative;
    });

    this.route.params.subscribe(params => {
      this.name = params['rep-name'];
      this.newRepresentative = this.name === 'undefined';
      if (this.newRepresentative) {
        this.name = '';
        this.store.dispatch(this.representativeActions.clearCurrent());
      }
      else {
        this.store.dispatch(this.representativeActions.getRepByName(this.name));

      }


    });


  }


  register() {
    const rep = new Representative();
    rep.name = this.name;
    this.store.dispatch(this.representativeActions.registerNew(rep));

  }

  finishCall(){
    this.store.dispatch(this.representativeActions.finishCall(this.rep));
  }

  takeCall(){
     if (!this.rep) {
       return;
     }
     this.store.dispatch( this.representativeActions.startCall(this.rep));
  }

}

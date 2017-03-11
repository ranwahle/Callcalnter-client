import {Component, OnInit} from '@angular/core';
import {QueueManagementService} from "../../services/queue-management.service";
import {Representative} from "../../classes/Representative";
import {ActivatedRoute} from "@angular/router";
import {Caller} from "../../classes/Caller";

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
  private rep: Representative;
  private queue: Caller[];

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.name = params['rep-name'];
      this.newRepresentative = this.name === 'undefined';
      if (this.newRepresentative) {
        this.name = '';
      }
      else {
        this.queueManagementService.getRepByName(this.name).toPromise().then(rep => {
            this.rep = rep;
            if (!this.rep) {
              this.newRepresentative = true;
            } else {
              this.registerOnCallersQueue();
            }
          }
        );
      }
    });


  }
   registerOnCallersQueue(){
    this.queueManagementService.queue$.distinctUntilChanged()
      .subscribe(queue => this.queue = queue);
   }

  register() {
    const rep = new Representative();
    rep.name = this.name;
    this.queueManagementService.registerRep(rep).toPromise().then(rep => {
      this.rep = rep;
      if (rep) {
        this.newRepresentative = false;
        this.registerOnCallersQueue();
      }
    });

  }

  finishCall(){
    this.queueManagementService.finishCall(this.rep);
  }

  takeCall(){
     if (!this.rep) {
       return;
     }
     this.queueManagementService.startCall(this.rep);
  }

}

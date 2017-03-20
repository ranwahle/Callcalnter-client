import {Component, OnInit} from '@angular/core';
import {QueueManagementService} from "../../services/queue-management.service";
import {Caller} from "../../classes/Caller";
import {ActivatedRoute} from "@angular/router";
import {Representative} from "../../classes/Representative";

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


  ngOnInit() {
    this.route.params.subscribe(param => {
      this.queueManagementService.findCallerByNameAndNumber(param['caller-name'], +param['caller-number'])
        .toPromise().then(caller => {
        this.caller = caller;
        this.queueManagementService.queue$.subscribe(
          queue => this.findIndex(queue)
        );
        //   this.getCallerRep();
        //this.findIndex(this.queueManagementService.queue$());
      });
    });

    this.queueManagementService.queue$.subscribe(
      queue => {
        if (this.caller) {
          this.findIndex(queue)
        }
      }
    );


  }

  getCallerRep() {
    this.queueManagementService.findRepByCaller(this.caller).toPromise()
      .then(rep => {
        this.callingRep = rep;

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
    } else {
      this.getCallerRep();
    }

  }

  register() {
    const caller: Caller = new Caller();
    caller.name = this.name;
    this.queueManagementService.registerCaller(caller).toPromise()
      .then(caller => {
          this.caller = caller;
          
        }
      );
  }

}

import {Component, OnInit, OnDestroy} from '@angular/core';
import {QueueManagementService} from "../../services/queue-management.service";
import {Representative} from "../../classes/Representative";
import {Caller} from "../../classes/Caller";

@Component({
  selector: 'app-manager-screen',
  templateUrl: './manager-screen.component.html',
  styleUrls: ['./manager-screen.component.css']
})
export class ManagerScreenComponent implements OnInit {

  private reps: Representative[];
  private queue: Caller[];
  private isStressTesting: boolean;

  constructor(private queueManagementService: QueueManagementService) {

  }


  ngOnInit() {
    this.queueManagementService.getRepresentatives().subscribe(reps => this.reps = reps);
    this.queueManagementService.representativesChanged.subscribe(
      reps => this.reps = reps
    );

    this.queueManagementService.autumaticCallersAddChanged.distinctUntilChanged().subscribe(result => {
      this.isStressTesting = result;
    })

     this.queueManagementService.queue$.distinctUntilChanged().subscribe(
       queue => this.queue = queue
     );


  }



  stopStressTest(){
    this.queueManagementService.stopAutomaticCallersAddition();
  }

  startStressTest(){
    this.queueManagementService.startAutomaticCallersAddition();
  }

}

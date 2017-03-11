import {Component, OnInit, OnDestroy} from '@angular/core';
import {QueueManagementService} from "../../services/queue-management.service";
import {Representative} from "../../classes/Representative";
import {Caller} from "../../classes/Caller";

@Component({
  selector: 'app-manager-screen',
  templateUrl: './manager-screen.component.html',
  styleUrls: ['./manager-screen.component.css']
})
export class ManagerScreenComponent implements OnInit, OnDestroy {

  private reps: Representative[];
  private queue: Caller[];
  private isStressTesting: boolean;

  constructor(private queueManagementService: QueueManagementService) {

  }

  ngOnDestroy() {
 //   this.isStressTesting = false;
  }

  ngOnInit() {
    this.queueManagementService.getRepresentatives().subscribe(reps => this.reps = reps);
    this.queueManagementService.representativesChanged.subscribe(
      reps => this.reps = reps
    );

    this.queueManagementService.isStressTest$.distinctUntilChanged().subscribe(result => {
      this.isStressTesting = result;
    })

     this.queueManagementService.queue$.distinctUntilChanged().subscribe(
       queue => this.queue = queue
     );


  }



  stopStressTest(){
    this.queueManagementService.stopStressTest();//  = false;
  }

  startStressTest(){
    this.queueManagementService.startStressTest();
  }

}

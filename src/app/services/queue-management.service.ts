import {Injectable} from '@angular/core';
import {appState} from "../state/app.state";
import {Caller} from "../classes/Caller";

@Injectable()
export class QueueManagementService {


startStressTest() {
  appState.isOnTest = true;
  this.addCallers();

}

stopStressTest() {
  appState.isOnTest = false;
}

addCallers() {
    let caller: Caller = new Caller();
    caller.name = 'Test caller';
    this.addCaller(caller);
    if (appState.isOnTest) {
      setTimeout(() => this.addCallers(), 1000);
    }
}

addCaller(caller: Caller) {

  caller.number = appState.callers.callers.length + 1;
  caller.waitingSince = new Date();
  appState.callers.callers.push(caller);
}


}

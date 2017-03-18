import {observable} from "mobx";
import {CallersState} from "./callers.state";
import {representativeState} from "./representatives.state";
import {Call} from "../classes/Call";
import {Representative} from "../classes/Representative";
/**
 * Created by ranwahle on 11/03/2017.
 */

export class AppState {
  constructor(){
    this.representatives = new representativeState();
    this.callers = new CallersState();
  }
  @observable callers: CallersState;
  @observable representatives: representativeState;
  @observable isOnTest: boolean;

  startCall(representative: Representative): void {
    const caller = this.callers.callers[0];

    if (!caller) {
      return;
    }
    this.callers.popFirst();
    let call: Call = new Call();
    call.caller = caller;
    call.callStart = new Date();

     representative.onCall = call;
  }



  finishCall(representative: Representative) {
    representative.onCall = null;
  }
}

export const appState = new AppState();


// export const rootReducer: Reducer<any> = combineReducers({
//   callers: callersReducer,
//   representatives: representativeReducer,
//   isOnTest: isOnTestReducer
// });

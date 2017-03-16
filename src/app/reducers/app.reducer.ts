import {Reducer, combineReducers} from "redux";
// import {callersReducer, CallersState} from "./callers.reducer";
// import {representativeReducer, representativeState} from "./representatives.reducer";
import {isOnTestReducer} from "./repsTest.reducer";
import {observable} from "mobx";
import {CallersState} from "./callers.reducer";
import {representativeState} from "./representatives.reducer";
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
}

export const appState = new AppState();


// export const rootReducer: Reducer<any> = combineReducers({
//   callers: callersReducer,
//   representatives: representativeReducer,
//   isOnTest: isOnTestReducer
// });

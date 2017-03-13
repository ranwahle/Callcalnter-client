import {Reducer, combineReducers} from "redux";
import {callersReducer, CallersState} from "./callers.reducer";
import {representativeReducer, representativeState} from "./representatives.reducer";
import {isOnTestReducer} from "./repsTest.reducer";
/**
 * Created by ranwahle on 11/03/2017.
 */

export interface AppState {
    callers: CallersState;
    representatives: representativeState;
    isOnTest: boolean;
}

export const rootReducer : Reducer<any> = combineReducers({
  callers: callersReducer,
  representatives: representativeReducer,
  isOnTest: isOnTestReducer
});

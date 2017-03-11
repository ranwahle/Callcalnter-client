import {Caller} from "../classes/Caller";
import {Action} from "redux";
import {CallerAction, CallerActionsFactory} from "../actions/caller.actions";
/**
 * Created by ranwahle on 11/03/2017.
 */


const initialState: Caller[] = [];

export function callersReducer(state: Caller[]  = initialState, action: CallerAction) : Caller[] {

  switch  (action.type) {
    case  CallerActionsFactory.ADD_CALLER: {
      action.caller.number = state.length + 1;
      return Object.assign([],[...state, action.caller]);
    }
    case CallerActionsFactory.POP_CALLER: {
      let  newQueue = Object.assign([], state);
      newQueue.splice(0, 1);
      return newQueue;
    }
  }

  return state;
}

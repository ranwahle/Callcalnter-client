import {Caller} from "../classes/Caller";
// import {Action} from "redux";
// import {CallerAction, CallerActionsFactory} from "../actions/caller.actions";
/**
 * Created by ranwahle on 11/03/2017.
 */


export class  CallersState {
  callers: Caller[];
  currentCaller: Caller;
  constructor(){
    this.callers = [];
  }
}

const initialState: CallersState = {
  callers: [],
  currentCaller: null
}

// export function callersReducer(state: CallersState  = initialState, action: CallerAction) : CallersState {
//
//   switch  (action.type) {
//     case  CallerActionsFactory.ADD_CALLER: {
//       action.caller.number = state.callers.length + 1;
//       return Object.assign({}, state, {callers: [...state.callers, action.caller]});
//     }
//     case CallerActionsFactory.POP_CALLER: {
//       let  newQueue = Object.assign([], state.callers);
//       newQueue.splice(0, 1);
//       return Object.assign({}, state, {callers: newQueue});
//     }
//     case CallerActionsFactory.FIND_CALLER: {
//       const caller  = state.callers.find(c => c.name === action.caller.name && c.number === action.caller.number);
//
//       return Object.assign({}, state, {currentCaller: caller});
//
//     }
//   }
//
//   return state;
// }

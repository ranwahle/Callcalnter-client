import {Caller} from "../classes/Caller";
import {observable} from "mobx";
// import {Action} from "redux";
// import {CallerAction, CallerActionsFactory} from "../actions/caller.actions";
/**
 * Created by ranwahle on 11/03/2017.
 */


export class  CallersState {
  @observable callers: Caller[];
  @observable currentCaller: Caller;
  constructor(){
    this.callers = [];
  }

  popFirst() : void {
    this.callers.splice(0, 1);
  }
}


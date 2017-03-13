import {Action} from "redux";
import {Caller} from "../classes/Caller";
/**
 * Created by ranwahle on 11/03/2017.
 */


export interface  CallerAction extends Action {
    caller: Caller;
}

export class CallerActionsFactory {

  static ADD_CALLER = '[Caller actions] ADD Caller';

  public  addCaller(caller: Caller) : CallerAction {
      return  {type: CallerActionsFactory.ADD_CALLER, caller: caller};
  }

  static FIND_CALLER = '[Caller actions] find caller';
  public  findCaller(caller: Caller) : CallerAction {
    return {type: CallerActionsFactory.FIND_CALLER, caller: caller};
  }


  static POP_CALLER = '[Callerr actions] pop caller';

}

/**
 * Created by ranwahle on 11/03/2017.
 */


import {Injectable} from "@angular/core";
import {Action} from "redux";
import {Representative} from "../classes/Representative";

export interface  RepresentativeAction extends Action {
  representative: Representative;
}

@Injectable()
export class RepresentativeActionsFactory {

  static GET_REP_BY_NAME = '[epresentative actions] Get representative by name';

  getRepByName(name: string): RepresentativeAction {
    return {
      type: RepresentativeActionsFactory.GET_REP_BY_NAME, representative: {
        name: name,
        onCall: null
      }
    };
  }

  static GET_REP_BY_NAME_RESULT = '[Representative actions] Rep by name result';

  static REGISTER_NEW = '[Representative actions] Register new representative';

  public registerNew(representative: Representative): RepresentativeAction {
    return {type: RepresentativeActionsFactory.REGISTER_NEW, representative: representative};
  }

  static START_CALL = '[Representative actions] start call';

  public  startCall(representative: Representative): RepresentativeAction {
    return {type: RepresentativeActionsFactory.START_CALL, representative: representative};
  }

  static REGISTER_CALL = '[Representative actions] register call';

  static FINISH_CALL = '[Representative actions] finish call';

  finishCall(representative: Representative): RepresentativeAction {
    return {type: RepresentativeActionsFactory.FINISH_CALL, representative: representative};
  }

  static  CLEAR_CURRENT = '[Representative actions] Clear current representative';

  clearCurrent(){
    return {type: RepresentativeActionsFactory.CLEAR_CURRENT, representative: null};
  }

}

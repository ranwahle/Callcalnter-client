import {Action} from "redux";
import {RepsTestActionsFactory} from "../actions/repTests.actions";
/**
 * Created by ranwahle on 11/03/2017.
 */


const initialState : boolean = false;

export  function isOnTestReducer(state: boolean = initialState, action: Action) : boolean {

  switch (action.type) {
    case  RepsTestActionsFactory.START_TEST : {
      return true;
    }
    case  RepsTestActionsFactory.STOP_TEST : {
      return false;
    }

    default: {
      return state;
    }
  }
}

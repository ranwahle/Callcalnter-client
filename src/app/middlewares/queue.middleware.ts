/**
 * Created by ranwahle on 11/03/2017.
 */

import {Injectable} from "@angular/core";
import {RepsTestActionsFactory} from "../actions/repTests.actions";
import {AppStore} from "../app.store";
import {Action} from "redux";
import {CallerActionsFactory} from "../actions/caller.actions";
import {Caller} from "../classes/Caller";
import {RepresentativeActionsFactory} from "../actions/representatives.actions";
import {Representative} from "../classes/Representative";
import {Call} from "../classes/Call";
@Injectable()
export class QueueMiddleware {

  private isOnTest;

  constructor(private callerActions: CallerActionsFactory) {

  }

  addCaller(store: AppStore) {
    if (this.isOnTest) {

      window.setTimeout(() => this.addCaller(store), 1000);
      let testCaller = this.createTestCaller();
      store.dispatch(this.callerActions.addCaller(testCaller));
    }
  }

  createTestCaller(): Caller {
    return {name: 'TestCaller', waitingSince: new Date()};
  }

  middleware = store => next => action => {


    if (action.type === RepsTestActionsFactory.START_TEST) {
      this.isOnTest = true;
      this.addCaller(store);
    } else if (action.type === RepsTestActionsFactory.STOP_TEST) {
      this.isOnTest = false;
    } else if (action.type === RepresentativeActionsFactory.START_CALL) {
      let representative: Representative = action.representative;
      let call = new Call();
      call.caller = Object.assign({}, store.getState().callersState.callers[0]);
      call.callStart = new Date();
      representative.onCall = call;
      store.dispatch({type: RepresentativeActionsFactory.REGISTER_CALL, representative: representative});
      return next({type: CallerActionsFactory.POP_CALLER});

    }


    return next(action);
  };

}

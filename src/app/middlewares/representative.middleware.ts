import {Injectable} from "@angular/core";
import {Action} from "redux";
import {RepresentativeActionsFactory, RepresentativeAction} from "../actions/representatives.actions";
import {AppStore} from "../app.store";
import {Representative} from "../classes/Representative";
/**
 * Created by ranwahle on 11/03/2017.
 */

@Injectable()
export class RepresentativeMiddleware {

  buildRepresentativeObject(store: AppStore, repResentative: Representative) : Representative {
    let repName: string = repResentative.name;
    let rep = store.state.representatives.representatives.find(rep => rep.name === repName);

    if (!rep) {
        return repResentative;
     }

    let regExp = /[0-9]+/;
    let arr = regExp.exec(repName);
    if (arr && arr.length > 0) {
      let numString = arr[0];
      let num = +numString + 1;
      rep.name =  repName.replace(numString, '' + num);
      return this.buildRepresentativeObject(store, rep);
    } else {
      rep.name =  repName + '0';
      return this.buildRepresentativeObject(store, rep);
    }

  }

  middleware = store => next => (action: RepresentativeAction) => {

    if (action.type === RepresentativeActionsFactory.GET_REP_BY_NAME) {
      const representative = store.getState().representatives.representatives.find(rep => rep.name === action.representative.name);

      if (representative) {
        return next( {type: RepresentativeActionsFactory.GET_REP_BY_NAME_RESULT,
          representative: representative});
      } else {
          return next ({type : RepresentativeActionsFactory.REGISTER_NEW,
            representative: this.buildRepresentativeObject(store, representative) });
      }
    }


    return next(action);
  };

}

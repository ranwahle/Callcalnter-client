import {Representative} from "../classes/Representative";
import {Action} from "redux";
import {RepresentativeActionsFactory, RepresentativeAction} from "../actions/representatives.actions";
/**
 * Created by ranwahle on 11/03/2017.
 */


export interface representativeState {
  representatives: Representative[];
  currentRepresentative: Representative;
}

const initialState: representativeState = {
  representatives: [],
  currentRepresentative: null
}
export function representativeReducer(state: representativeState = initialState, action: RepresentativeAction): representativeState {

  switch (action.type) {
    case RepresentativeActionsFactory.REGISTER_NEW : {
      return Object.assign({}, state, {representatives: [...state.representatives, action.representative]
      , currentRepresentative: action.representative});
    }
    case RepresentativeActionsFactory.GET_REP_BY_NAME_RESULT: {
      return Object.assign({}, state, {currentRepresentative: action.representative});
    }
    case RepresentativeActionsFactory.REGISTER_CALL: {
      return Object.assign({}, state, {currentRepresentative: action.representative});
    }
    case RepresentativeActionsFactory.FINISH_CALL: {
      let representative = Object.assign({},action.representative);
      let representatives = Object.assign([], state.representatives);

      representative.onCall = null;
      representatives[representatives.findIndex(rep => rep.name === representative.name)] = representative;
      return Object.assign({}, state, {representatives: representatives,currentRepresentative: representative});
    }

    case RepresentativeActionsFactory.CLEAR_CURRENT : {
      return Object.assign({}, state, {currentRepresentative: null});
    }


    default:
      return state;
  }

}

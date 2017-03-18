import {Representative} from "../classes/Representative";
import {observable} from "mobx";
/**
 * Created by ranwahle on 11/03/2017.
 */


export class representativeState {
  @observable representatives: Representative[];
  @observable currentRepresentative: Representative;
  constructor() {
    this.representatives = [];
  }
}



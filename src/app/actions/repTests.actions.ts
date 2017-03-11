import {Action} from "redux";
import {Injectable} from "@angular/core";
/**
 * Created by ranwahle on 11/03/2017.
 */


@Injectable()
export class RepsTestActionsFactory  {
  static START_TEST = '[Reps tests] Start test';

  public  startTest() : Action {
    return  {type: RepsTestActionsFactory.START_TEST}
  }

  static STOP_TEST = '[Reps tests] stop test';

  public  stopTest() : Action {
    return  {type: RepsTestActionsFactory.STOP_TEST}
  }




}

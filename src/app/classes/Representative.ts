import {Caller} from "./Caller";
import {Call} from "./Call";
import {observableToBeFn} from "rxjs/testing/TestScheduler";
import {observable} from "mobx";
/**
 * Created by ranwahle on 04/03/2017.
 */
export class Representative {
    name: string;
    @observable onCall: Call;

}

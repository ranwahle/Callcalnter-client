import {QueueMiddleware} from "./queue.middleware";
import {RepresentativeMiddleware} from "./representative.middleware";
/**
 * Created by ranwahle on 11/03/2017.
 */
export const APP_MIDDLEWARES = [
  QueueMiddleware, RepresentativeMiddleware
];

// import {Injectable} from "@angular/core";
// import {createStore, Action, applyMiddleware} from "redux";
// import {rootReducer, AppState} from "./reducers/app.reducer";
// import {QueueMiddleware} from "./middlewares/queue.middleware";
// import {RepresentativeMiddleware} from "./middlewares/representative.middleware";
// /**
//  * Created by ranwahle on 11/03/2017.
//  */
//
//
// @Injectable()
// export class AppStore {
//
//
//   private store;
//   constructor(queueMiddleware: QueueMiddleware, representativeMiddlerware: RepresentativeMiddleware){
//     const DevtollExtensionProperty: string = '__REDUX_DEVTOOLS_EXTENSION__';
//     this.store = createStore(rootReducer,
//       window[DevtollExtensionProperty] && window[DevtollExtensionProperty](),
//     applyMiddleware(queueMiddleware.middleware, representativeMiddlerware.middleware));
//   }
//
//   dispatch(action: Action) {
//     this.store.dispatch(action);
//   }
//
//   get state() : AppState {
//     return this.store.getState();
//   }
//
//   subscribe(callback) {
//     this.store.subscribe(callback);
//   }
// }

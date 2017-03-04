import {ManagerScreenComponent} from "./components/manager-screen/manager-screen.component";
import {CallerScreenComponent} from "./components/caller-screen/caller-screen.component";
import {RepresentativeScreenComponent} from "./components/representative-screen/representative-screen.component";
/**
 * Created by ranwahle on 04/03/2017.
 */

export const appRoutes = [
  {
    path: 'manager', component: ManagerScreenComponent
  },
  {
    path: 'caller/:caller-name/:caller-number', component: CallerScreenComponent
  },
  {
    path: 'representative/:rep-name', component: RepresentativeScreenComponent
  },
  {
    path: 'caller/:caller-name', component: CallerScreenComponent
  }
]


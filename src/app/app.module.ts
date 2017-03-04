import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CallerScreenComponent } from './components/caller-screen/caller-screen.component';
import { RepresentativeScreenComponent } from './components/representative-screen/representative-screen.component';
import { ManagerScreenComponent } from './components/manager-screen/manager-screen.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {MaterialModule} from "@angular/material";
import 'hammerjs';
import {QueueManagementService} from "./services/queue-management.service";
import {UserService} from "./services/user.service";

@NgModule({
  declarations: [
    AppComponent,
    CallerScreenComponent,
    RepresentativeScreenComponent,
    ManagerScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot(),
  ],
  providers: [QueueManagementService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

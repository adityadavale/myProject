import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RouterModule,Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const appRoutes:Routes=[
  {
    path:'dashboard' ,
    component: DashboardComponent
  },
  {
    path: 'child',
    component: ChildComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: AppComponent,
    pathMatch:'full'
  },
  {
    path: '**',
    component:NotfoundComponent,
    pathMatch:'full'

  }

];


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    DashboardComponent,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

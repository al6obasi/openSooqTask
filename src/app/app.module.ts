// component build in 

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthService } from './auth.service';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// declared component build out  
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NavComponent } from './nav/nav.component';


const appRoutingProviders:any[] = [];
const appRoutes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'home' 
  // },
     {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]

  },
     {
    path: 'home',
    component: HomeComponent
  },
  { path: "**",redirectTo:"welcome"}

];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
    
  providers: [appRoutingProviders,AuthService,AuthGuard,{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { };

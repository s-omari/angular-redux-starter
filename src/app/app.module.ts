import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// ng bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//import { DynamicFormsCoreModule } from "@ng-dynamic-forms/core";
//import { DynamicFormsNGBootstrapUIModule } from "@ng-dynamic-forms/ui-ng-bootstrap";

// router store
import { StoreRouterConnectingModule , RouterStateSerializer } from '@ngrx/router-store'




import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {reducers , effects , CustomSerializer} from './store';
// not used in production (for testing/debuging state)
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

// this would be done dynamically with webpack for builds
const environment = {
  development: true,
  production: false,
};

//meta reducer , applied to each reduer , 
export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze] //*use storeFreeze only in development mode 
  : [];


import { AppComponent } from './app.component';
import { routing } from './app.routing';






@NgModule({
  declarations: [
    AppComponent ,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
  //  DynamicFormsCoreModule.forRoot(), 
   // DynamicFormsNGBootstrapUIModule, 
    routing , 
    StoreModule.forRoot( reducers , { metaReducers }),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule ,
    environment.development ? StoreDevtoolsModule.instrument() : []

  ],
  providers: [{provide: RouterStateSerializer, useClass: CustomSerializer}],
  bootstrap: [AppComponent]
})
export class AppModule { }

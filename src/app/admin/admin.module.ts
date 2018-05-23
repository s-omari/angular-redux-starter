import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// ng bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { FormsModule , ReactiveFormsModule  } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


import { reducers , effects   } from './store'
//NGRX Redux  
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UsersComponent } from './containers/users/users.component';
import { routing } from './admin.routing';


// services
import * as fromServices from './services';

// components
import * as fromComponents from './components';

import { UserItemComponent } from './components/user-item/user-item.component';
import { UserFormComponent } from './components/user-form/user-form.component';


// export const ROUTES: Routes =  [
//   { path: '', pathMatch: 'full', redirectTo: 'users' },
//   {
//     path: 'users',
//     component: UsersComponent
//     //loadChildren: './users/users.module#UsersModule',
//   },
// ];




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
   
    ReactiveFormsModule,
    NgbModule,
    routing ,//  RouterModule.forChild(ROUTES), n remove UsersComponent from declarations
    StoreModule.forFeature( 'admin' , reducers ) ,
    EffectsModule.forFeature(effects) ,
    HttpClientModule

  ],

  providers: [...fromServices.services],
  declarations: [ 
    ...fromComponents.components,
    UsersComponent,
     ] 

})
export class AdminModule { }


export const AdminComponents = [ 
//  UsersComponent 
]
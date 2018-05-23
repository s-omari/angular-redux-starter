import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';



// ng bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule , ReactiveFormsModule  } from '@angular/forms';

//import admin store , change this to crud store in shared module
import { reducers , effects   } from '../admin/store'
//NGRX Redux  
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


// user services , change this to shared crud service
import { UsersService } from '../admin/services/users.service';




import { routing } from './demo.routing';

// components
import * as fromContainers from './containers';
import { DemoComponent } from './demo.component';
import { CrudFormComponent } from './components/crud/crud-form/crud-form.component';
import { HttpClientModule } from '@angular/common/http';
import { CrudTableComponent } from './components/crud/crud-table/crud-table.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing ,
    StoreModule.forFeature( 'admin' , reducers ) ,
    EffectsModule.forFeature(effects) ,
    NgbModule.forRoot(),
    HttpClientModule
  
  ],
  providers: [UsersService],
  declarations: [
    ...fromContainers.containers,
    DemoComponent,
    CrudFormComponent,
    CrudTableComponent,
    SideMenuComponent,
  ]
})
export class DemoModule { }

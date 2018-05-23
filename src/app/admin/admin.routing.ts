import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './containers/users/users.component';

const routes: Routes = [
    // { path: '',  pathMatch: 'full' , redirectTo: 'users'  } ,
  { path: 'users', component: UsersComponent ,
  children: [
    { path: ':userId', component: UsersComponent },

  ]
   }
];


export const routing: ModuleWithProviders = RouterModule.forChild(routes);
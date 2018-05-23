import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LayoutComponent } from "./containers/layout/layout.component";
import { CrudComponent } from "./containers/crud/crud.component";

import { UsersComponent } from "../admin/containers/users/users.component"


import { DemoComponent } from './demo.component';


const routes: Routes = [
 

  {
    path: "",
    component: DemoComponent,
    children: [
      { path: "layout", component: LayoutComponent   },
   
      { path: "crud", component: CrudComponent ,
      children: [
        { path: "users", component: CrudComponent },
        { path: "categories", component: CrudComponent },
      ]},
    ]
  }
,

  // {
  //   path: "layout",
  //   component: LayoutComponent,
  //   children: [
  //     { path: "users", component: LayoutComponent },
  //   ]
  // }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

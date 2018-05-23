import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'demo', pathMatch: 'full' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
  { path: 'demo', loadChildren: './demo/demo.module#DemoModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
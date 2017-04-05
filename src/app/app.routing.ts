import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: FrontPageComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

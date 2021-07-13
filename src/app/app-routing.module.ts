import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { SiteRoutes } from './site';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  ...SiteRoutes
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

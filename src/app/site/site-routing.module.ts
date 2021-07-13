import { Routes } from '@angular/router';
import {TrackingComponent} from "./tracking";
import {HomeComponent} from "./home";

export const SiteRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'rastreio',
    component: TrackingComponent
  },
  {
    path: 'rastreio/:id',
    component: TrackingComponent
  }
]

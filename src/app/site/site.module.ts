import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TrackingComponent } from './tracking/tracking.component';
import { LocalDateTimePipe } from './shared/pipe/local-date-time.pipe';



@NgModule({
  declarations: [
    HomeComponent,
    TrackingComponent,
    LocalDateTimePipe
  ],
  imports: [
    CommonModule
  ],
  providers: [
    LocalDateTimePipe
  ]
})
export class SiteModule { }

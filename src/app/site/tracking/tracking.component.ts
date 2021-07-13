import { Component, OnInit } from '@angular/core';
import { ItemTrack } from '../shared/model/itemTrack.model';
import { TrackingService } from '../shared/service/tracking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {

  trackingItem: ItemTrack[] = [];

  constructor(
    public trackingService: TrackingService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getTracking();
  }

  getTracking(){
    this.trackingService.getTrackingId(this.router.url.split("/")[2]).subscribe( data =>{
      this.trackingItem = data.content;
    });
  }

}

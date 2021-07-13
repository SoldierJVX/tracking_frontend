import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToTracking(id: string){

    if(id == ""){
      this.router.navigateByUrl('/rastreio');
    } else {
      this.router.navigateByUrl('/rastreio/' + id);
    }
    
  }

}

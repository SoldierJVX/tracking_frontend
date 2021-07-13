import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import { ItemTrack } from '../model/itemTrack.model';
import { ResponsePageable } from '../model/responsePageable.model';

@Injectable({
    providedIn: 'root'
  })
export class TrackingService {

    apiUrl = 'http://localhost:8080/tracking';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(
        private httpClient: HttpClient
      ) { }

    public getTrackingId(id: string): Observable<ResponsePageable> {
      return this.httpClient.get<ResponsePageable>(this.apiUrl + "/" + id);
    }

}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Trip } from '../models/trip';
import { get } from 'mongoose';

@Injectable({
  providedIn: 'root'
})

export class TripDataService {

  constructor(private http: HttpClient) {}
  url = 'http://localhost:3000/api/trips';

  getTrips() : Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url);
  }

  getTrip(tripCode: string) : Observable<Trip> {
    return this.http.get<Trip>(this.url + "/" + tripCode);
  }

  addTrip(formData: Trip) : Observable<Trip> {
    return this.http.post<Trip>(this.url, formData);
  }

  updateTrip(tripCode: string, editForm: any) : Observable<Trip> {
    return this.http.put<Trip>(this.url + "/" + tripCode,editForm);
  }

  deleteTrip(tripCode: string) : Observable<any> {
    return this.http.delete<Trip>(this.url + "/" + tripCode);
  }
}
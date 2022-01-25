import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { TowerEvent } from '../TowerEvent';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TowerEventService {
  private apiUrl = 'http://localhost:3000/api/events'


  constructor(private http:HttpClient) { }

  getEvents(): Observable<TowerEvent[]> {
    const res = this.http.get<TowerEvent[]>(this.apiUrl)
    console.log(res)
    return res
  }

}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { TowerEvent } from '../TowerEvent';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})


export class TowerEventService {
  private apiUrl = 'http://localhost:3000/api/events'



  constructor(private http:HttpClient) { }


  getEventById(id: string): Observable<TowerEvent> {
    const url = `${this.apiUrl}/${id}`
    return this.http.get<TowerEvent>(url)
  }

  getEvents(): Observable<TowerEvent[]> {
    const res = this.http.get<TowerEvent[]>(this.apiUrl, httpOptions)
    console.log(res)
    return res
  }

}

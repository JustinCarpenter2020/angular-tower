import { Component, OnInit } from '@angular/core';
import { TowerEvent } from '../../TowerEvent';
import { TowerEventService } from '../../services/tower-event.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  towerEvents:TowerEvent[] = []
  constructor(private towerEventService:TowerEventService) { }

  ngOnInit(): void {
    this.towerEventService.getEvents().subscribe((events) => this.towerEvents = events)
  }

}

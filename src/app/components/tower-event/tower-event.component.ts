import { Component, OnInit } from '@angular/core';
import { TowerEvent } from '../../TowerEvent';
import { Input } from '@angular/core';

@Component({
  selector: 'app-tower-event',
  templateUrl: './tower-event.component.html',
  styleUrls: ['./tower-event.component.css']
})
export class TowerEventComponent implements OnInit {

  @Input() towerEvent: TowerEvent = { id: '', name: '', imgUrl: '', type: '', status: '', description: '', location: '', tickets: 0, price: 0, startDate: '', endDate: '', comments: []};

  constructor() { }

  ngOnInit(): void {
  }

}

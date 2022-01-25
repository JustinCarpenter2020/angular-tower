import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { TowerEvent } from '../../TowerEvent';
@Component({
  selector: 'app-event-header',
  templateUrl: './event-header.component.html',
  styleUrls: ['./event-header.component.css']
})
export class EventHeaderComponent implements OnInit {
  @Input() imgUrl:string = '';
  @Input() name:string = '';
  @Input() description:string = '';
  @Input() location:string = '';
  @Input() startDate:string = '';
  @Input() endDate:string = '';
  @Input() tickets:number = 0;
  @Input() price:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}

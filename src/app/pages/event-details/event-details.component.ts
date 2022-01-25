import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TowerEvent } from '../../TowerEvent';
import { TowerEventService } from '../../services/tower-event.service';
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  private sub: any;
  id: string = '';
  towerEvent: TowerEvent = { id: '', name: '', imgUrl: '', type: '', status: '', description: '', location: '', tickets: 0, price: 0, startDate: '', endDate: '', comments: []};
  constructor(private route:ActivatedRoute, private towerEventService:TowerEventService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']
    })

    this.towerEventService.getEventById(this.id).subscribe((towerEvent) => this.towerEvent = towerEvent)

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

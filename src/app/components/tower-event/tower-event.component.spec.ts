import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowerEventComponent } from './tower-event.component';

describe('TowerEventComponent', () => {
  let component: TowerEventComponent;
  let fixture: ComponentFixture<TowerEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TowerEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TowerEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

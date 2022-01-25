import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailsComponent } from './pages/event-details/event-details.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'event/:id',
  component: EventDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

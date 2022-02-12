import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsListComponent } from './components/cards-list/cards-list.component';

const routes: Routes = [
  { path: 'searched', component: CardsListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class HomeRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddingNewsComponent } from './components/news/adding-news/adding-news.component';

const routes: Routes = [
  { path: 'addingNews', component: AddingNewsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), RouterModule],
  exports: [RouterModule],
})

export class HomeRoutingModule { }

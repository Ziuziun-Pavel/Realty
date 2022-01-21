import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlatPageComponent } from './features/home/components/advertisement/flat-page/flat-page.component';
import { HomeComponent } from './features/home/home.component';
import { NewsPageComponent } from './features/home/components/news/news-page/news-page.component';

const routes: Routes = [
  {path: 'page/:type/:id', component: FlatPageComponent},
  {path: '', component: HomeComponent},
  {path: 'news/:id', component: NewsPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

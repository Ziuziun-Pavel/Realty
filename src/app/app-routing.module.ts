import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageForFlat } from "./features/home/components/advertisement/page/page-for-flat.component";
import { HomeComponent } from "./features/home/home.component";
import { PageForNewsComponent } from "./features/home/components/news/page-for-news-card/page-for-news.component";

const routes: Routes = [
  {path: 'page/:id', component: PageForFlat},
  {path: '', component: HomeComponent},
  {path: 'news/:id', component: PageForNewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

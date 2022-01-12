import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageComponent} from "./components/advertisement/page/page.component";
import {HomeComponent} from "./home.component";

const routes: Routes = [
  {path: 'page', component: PageComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageForFlat } from "./components/advertisement/page/page-for-flat.component";
import { HomeComponent } from "./home.component";

const routes: Routes = [
  {path: 'page', component: PageForFlat},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }

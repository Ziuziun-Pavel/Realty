import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from "./features/home/components/advertisement/page/page.component";
import { HomeComponent } from "./features/home/home.component";

const routes: Routes = [
  {path: 'page/:id', component: PageComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

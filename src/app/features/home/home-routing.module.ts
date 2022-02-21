import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes), RouterModule],
  exports: [RouterModule],
})

export class HomeRoutingModule { }

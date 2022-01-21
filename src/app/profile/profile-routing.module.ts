import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from "./details/details.component";
import { EditComponent } from "./edit/edit.component";
import { ProfileComponent } from "./profile.component";

const routes: Routes = [
  {path: '',component: ProfileComponent},
  {path: 'details',component: DetailsComponent},
  {path: 'edit',component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ProfileRoutingModule {}

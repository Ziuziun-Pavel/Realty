import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { ProfileComponent } from './profile.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: ProfileComponent,
    children: [
      { path: 'details', component: DetailsComponent, canActivate: [AuthGuard] },
      { path: 'edit', component: EditComponent },
    ] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ProfileRoutingModule {}

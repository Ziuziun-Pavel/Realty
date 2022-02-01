import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { AddAdvertsComponent } from './add-adverts/add-adverts.component';

@NgModule({
  declarations: [
    ProfileComponent,
    DetailsComponent,
    EditComponent,
    AddAdvertsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  providers: [AuthGuard],
})
export class ProfileModule { }

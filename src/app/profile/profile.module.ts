import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { AddAdvertsComponent } from './add-adverts/add-adverts.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { AdvertsListComponent } from './adverts-list/adverts-list.component';
import { HomeModule } from '../features/home/home.module';
import { SharedModule } from '../shared/shared.module';
import { EditAdvertComponent } from './edit-advert/edit-advert.component';

@NgModule({
  declarations: [
    ProfileComponent,
    DetailsComponent,
    EditComponent,
    AddAdvertsComponent,
    AdvertsListComponent,
    EditAdvertComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ProfileRoutingModule,
    HomeModule,
    SharedModule,
  ],
  providers: [AuthGuard],
})
export class ProfileModule { }

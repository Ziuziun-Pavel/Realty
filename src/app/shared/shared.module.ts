import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderService } from './services/loader.service';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomDropdownComponent } from './components/custom-dropdown/custom-dropdown.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AdvertFormComponent } from './components/advert-form/advert-form.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  imports: [CommonModule, MatProgressSpinnerModule, ReactiveFormsModule, RouterModule, BsDropdownModule],
  declarations: [
    LoaderComponent,
    UserFormComponent,
    CustomDropdownComponent,
    AdvertFormComponent,
    ProfileDetailsComponent,
    FilterPipe,
  ],
  exports: [LoaderComponent, UserFormComponent, CustomDropdownComponent, AdvertFormComponent, ProfileDetailsComponent, FilterPipe],
  providers: [LoaderService],
})

export class SharedModule {
}

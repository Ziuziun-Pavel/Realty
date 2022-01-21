import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile.component";

@NgModule({
  declarations: [
    ProfileComponent,
    DetailsComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ProfileModule { }

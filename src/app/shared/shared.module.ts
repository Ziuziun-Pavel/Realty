import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderService } from './services/loader.service';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, MatProgressSpinnerModule, ReactiveFormsModule, RouterModule],
  declarations: [
    LoaderComponent,
    UserFormComponent,
  ],
  exports: [LoaderComponent, UserFormComponent],
  providers: [LoaderService],
})

export class SharedModule {
}

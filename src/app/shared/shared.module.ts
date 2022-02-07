import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderService } from './services/loader.service';
import { UserFormComponent } from './components/user-form/user-form.component';

@NgModule({
  imports: [CommonModule, MatProgressSpinnerModule],
  declarations: [
    LoaderComponent,
    UserFormComponent,
  ],
  exports: [LoaderComponent],
  providers: [LoaderService],
})

export class SharedModule {
}

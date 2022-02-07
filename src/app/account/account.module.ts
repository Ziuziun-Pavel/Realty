import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';

import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    AccountComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccountRoutingModule,
    SharedModule,
  ],
})

export class AccountModule {}

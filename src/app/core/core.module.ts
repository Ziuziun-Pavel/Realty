import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccountRoutingModule } from '../account/account-routing.module';
import { ProfileRoutingModule } from '../profile/profile-routing.module';


@NgModule({
  imports: [CommonModule, AccountRoutingModule, ProfileRoutingModule],
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
})

export class CoreModule { }

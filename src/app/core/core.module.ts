import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

const accountModule = () =>
  import('../account/account.module').then((x) => x.AccountModule);

const profileModule = () =>
  import('../profile/profile.module').then((x) => x.ProfileModule);

@NgModule({
  imports: [CommonModule, RouterModule.forChild([
    { path: 'account', loadChildren: accountModule },
    { path: 'profile', loadChildren: profileModule },
  ])],
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

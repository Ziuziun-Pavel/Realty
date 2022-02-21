import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlatPageComponent } from './features/home/components/advertisement/flat-page/flat-page.component';
import { HomeComponent } from './features/home/home.component';
import { NewsPageComponent } from './features/home/components/news/news-page/news-page.component';
import { AuthGuard } from './core/guards/auth.guard';
import { Role } from './core/models/role.rs';

const accountModule = () =>
  import('./account/account.module').then((x) => x.AccountModule);
const profileModule = () =>
  import('./profile/profile.module').then((x) => x.ProfileModule);
const adminModule = () =>
  import('./admin/admin.module').then((x) => x.AdminModule);

const routes: Routes = [
  { path: 'page/:type/:id', component: FlatPageComponent },
  { path: '', component: HomeComponent },
  { path: 'news/:id', component: NewsPageComponent },
  { path: 'profile', loadChildren: profileModule },
  { path: 'account', loadChildren: accountModule },
  { path: 'admin',
    canActivate: [AuthGuard],
    data: {
      roles: [
        Role.Admin,
      ]
    },
    loadChildren: adminModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

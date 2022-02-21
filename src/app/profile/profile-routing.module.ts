import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { ProfileComponent } from './profile.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { AddAdvertsComponent } from './add-adverts/add-adverts.component';
import { AdvertsListComponent } from './adverts-list/adverts-list.component';
import { FlatPageComponent } from '../features/home/components/advertisement/flat-page/flat-page.component';
import { EditAdvertComponent } from './edit-advert/edit-advert.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: 'details',
        component: DetailsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'edit',
        component: EditComponent,
      },
      {
        path: 'adding',
        component: AddAdvertsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'advertsList/edit-advert/:id',
        component: EditAdvertComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'advertsList',
        component: AdvertsListComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'advertsList/page/:type/:id',
        component: FlatPageComponent,
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ProfileRoutingModule {
}

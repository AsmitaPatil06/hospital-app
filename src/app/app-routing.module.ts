import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { PatientListComponent } from './patient-list/patient-list.component';

import { AuthServiceService } from './auth-service.service';

const routes: Routes = [
  { path: 'main', component: MainPageComponent },

  {
    path: 'admin',

    component: AdminPageComponent,
    children: [
      {
        path: '', // child route path
        component: PatientListComponent, // child route component that the router renders
      },
      {
        path: 'list', // child route path
        component: PatientListComponent, // child route component that the router renders
      },

      {
        path: 'add', // child route path
        component: PatientAddComponent, // child route component that the router renders
      },
      {
        path: 'patient-edit/:index', // child route path
        component: PatientAddComponent, // child route component that the router renders
      },
    ],
  },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

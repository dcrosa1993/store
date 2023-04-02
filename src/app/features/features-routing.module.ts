import { NgModule } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { StoreManagerComponent } from './store-manager/store-manager.component';
import { StoreComponent } from './store/store.component';
import { UserManagerComponent } from './user-manager/user-manager.component';

const routes: Routes = [
  {
    path: 'store',
    data: { showMenu: false, showDemo: true },

    component: StoreComponent,
  },

  {
    path: 'auth',
    data: { showMenu: false, showDemo: true },
    children: [
      {
        path: 'login',
        component: SignInComponent,
      },
      {
        path: 'register',
        component: SignUpComponent,
      },
    ],
  },
  {
    path: 'admin',
    data: { showMenu: true, showDemo: true },
    children: [
      {
        path: 'services',
        component: StoreManagerComponent,
      },
      {
        path: 'users',
        component: UserManagerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { StoreComponent } from './store/store.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  {
    path: 'store',
    component: StoreComponent,
  },
  {
    path: 'store/:id',
    component: ViewProductComponent,
  },
  {
    path: 'auth/login',
    component: SignInComponent,
  },
  {
    path: 'auth/register',
    component: SignUpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}

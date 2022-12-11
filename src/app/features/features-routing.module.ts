import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}

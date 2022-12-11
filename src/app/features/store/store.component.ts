import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from 'src/app/share/product/product.component';
import { Product } from 'src/app/models/product';
import { ProductData } from 'src/app/mock/m-product';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './store.component.html',
})
export class StoreComponent {
  protected products: Product[] = [
    ProductData,
    ProductData,
    ProductData,
    ProductData,
    ProductData,
    ProductData,
    ProductData,
    ProductData,
    ProductData,
    ProductData,
    ProductData,
    ProductData,
    ProductData,
    ProductData,
    ProductData,
    ProductData,
    ProductData,
    ProductData,
    ProductData,
  ];
}

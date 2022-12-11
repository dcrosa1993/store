import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/models/export';
import { ProductData } from 'src/app/mock/m-product';

@Component({
  selector: 'app-view-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-product.component.html',
  styles: [],
})
export class ViewProductComponent {
  protected product: Product = ProductData;
}

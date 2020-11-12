import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Product } from 'src/models/product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products: Product[]

  constructor(public productService: ProductService) { 
    this.getProducts()
  }

  getProducts(){
  this.productService.getProducts().subscribe( p => {
      this.products = p
    })
  }
}

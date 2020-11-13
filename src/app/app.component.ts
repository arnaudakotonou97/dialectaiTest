import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  products: Product[]

  constructor(public productService: ProductService) { 
   
  }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
  this.productService.getProducts().subscribe( p => {
      this.products = p
    })
  }
}

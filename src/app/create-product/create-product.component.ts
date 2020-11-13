import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  product: Product = { id: null,productName:'', price:0, description:'', starRating:0, imageUrl: '' }

constructor(private productService: ProductService,private router: Router ) { }

  ngOnInit(): void {
  }

  addProduct(){
    if(this.product.productName !== '' && this.product.description !== ''){
      this.product.imageUrl = "https://via.placeholder.com/300/000000/FFFFFF/?text=" + this.product.productName
      this.productService.createProduct(this.product).subscribe(
        data =>  {
          this.router.navigate( ['/product-list'])      
        })
    }

  }

}

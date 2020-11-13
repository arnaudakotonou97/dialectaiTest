import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[]
  constructor(private productService: ProductService,private router: Router) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.productService.getProducts().subscribe( p => {
        this.products = p
      })
    }
  
    deleteProduct(id: number){
      console.log(id)
      this.productService.deleteProduct(id).subscribe( p => {
        this.getProducts()
      })
    }
  
    goToDetail(id){
      this.router.navigate( ['/product-detail', id] );
    }

}
import { Product } from 'src/models/product';
import { ProductService } from '../product.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  
  @Input() prod: Product;
  
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
  }

  deleteProduct(id: number){
    console.log(id)
    this.productService.deleteProduct(id).subscribe( p => {
      // this.prod = p
    })
  }

}

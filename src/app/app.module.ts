import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './product/product.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductsDataService } from './products-data.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(ProductsDataService, {
      dataEncapsulation: false,
      }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

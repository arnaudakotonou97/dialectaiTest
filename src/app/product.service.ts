import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Product } from 'src/models/product';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private productsUrl = 'api/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getProduct(id: number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url)
      .pipe(
        tap(data => console.log('getProduct: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createProduct(product: Product): Observable<Product> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    product.id = null;
    return this.http.post<Product>(this.productsUrl, product, { headers })
      .pipe(
        tap(data => console.log('createProduct: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteProduct(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.productsUrl}/${id}`;
    return this.http.delete<Product>(url, { headers })
      .pipe(
        tap(data => console.log('deleteProduct: ' + id)),
        catchError(this.handleError)
      );
  }

  private handleError(err): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
  
}

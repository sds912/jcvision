import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private URL = '../../../assets/data/products.json'

  constructor(private httpClient: HttpClient) { }

 public loadProducts(){
  return this.httpClient.get(this.URL);
  }


}

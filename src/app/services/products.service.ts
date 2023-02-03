import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http : HttpClient) { }

  public getProds(){
    return this.http.get("http://localhost:8080/products")
  }
  public getProdById(id : number){
    return this.http.get("http://localhost:8080/product/"+id.toString())
  }
}

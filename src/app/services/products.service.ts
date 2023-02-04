import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http : HttpClient) { }

  public getProds(){
    return this.http.get("https://prod-backend-65ib.onrender.com/products")
  }
  public getProdById(id : number){
    return this.http.get("https://prod-backend-65ib.onrender.com/product/"+id.toString())
  }
}

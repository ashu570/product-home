import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  constructor(private route : ActivatedRoute, private prodService : ProductsService){}
  product : any;
  ngOnInit(): void {
    this.route.params.subscribe(
      {
        next :(data)=> this.getData(parseInt(data['id']))
      }
    )
  }

  getData(data : number){
    this.prodService.getProdById(data).subscribe(
      {
        next : data =>this.product = data,
        error : ()=>alert("not found")
      }
    )
  }

}

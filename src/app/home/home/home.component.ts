import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private prod : ProductsService, private router : Router){}
  product : any=[];
  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(){
    this.prod.getProds().subscribe({
      next : (data)=>{
        this.product = data;
      },
      error : () => {alert("No products found")}
    })
  }

  goToProd(id : number){
    this.router.navigateByUrl("products?id="+id.toString());
  }
}

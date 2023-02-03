import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(private router : Router){}
  @Input() prod : any;
  public goToProd(){
    this.router.navigateByUrl("product/"+this.prod.id);
  }
}

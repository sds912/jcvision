import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{

  public currentList: any = [];

  public selectedCat: string = "jctouch"

  public products: any[] = [];



  constructor(public productsService: ProductsService){
    productsService.loadProducts().subscribe((data: any) => {
      this.products = data;
      this.loadProducts();
    });
  }

  ngOnInit(): void {

  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    navSpeed: 700,
    margin: 4,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      },
      992:{
        items: 4
      },
     1200: {
         items: 4
      }
    },
    nav: true
  }


  loadProducts(cat:string = "jctouch"){
   this.selectedCat = cat;
   this.currentList = this.products.find(v => v.category.includes(cat))?.products??[];
  }



}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{

  public product: any;
  constructor(private route: ActivatedRoute, private productService: ProductsService){
    this.route.paramMap.subscribe(p => {
      if(p !== undefined && p.get('id') != undefined){
        this.productService.loadProducts()
        .subscribe((v: any) => {
          if(v !== undefined && v.length > 0){
           v.forEach((e:any) => {
            console.log(p.get('id'))

            this.product = e.products.find((n:any) => n.id == p.get('id'));
            console.log(this.product)
           });
          }
        })
      }
    })
  }

  ngOnInit(): void {

  }


}

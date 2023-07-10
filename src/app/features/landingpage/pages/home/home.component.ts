import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public products: any[]  = [];
  public isLoading: boolean = false;

  constructor(private productService: ProductsService) {

  }

  ngOnInit(): void {
    this.isLoading = true;
    this.productService.loadProducts().subscribe((data: any) => {
      this.products = data;
      this.isLoading = false;
    })
  }

}

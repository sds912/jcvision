import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() public products: any[] = [];
  public selectedProduct:  any;
  public selectedCategory: any;
  productsToSelect: any ;

  public topContacts = [
    {
      icon: "fa fa-phone",
      label: "+221 77 744 36 63"
    },
    {
      icon: "fa fa-envelope",
      label: "jcvision@gmail.com"
    },
    {
      icon: "fa fa-map-marker",
      label: "Dakar ousest foire"
    }
  ]

  public topSocials = [
    {
      icon: "fab fa-facebook"
    },
    {
      icon: "fab fa-linkedin"
    },
    {
      icon: "fab fa-twitter"
    }
  ]

  public menus = [
    {
      label: "Home"
    },
    {
      label: "Produits"
    },
    {
      label: "Solutions"
    },
    {
      label: "Logiciels"
    },
    {
      label: "Contacts"
    },
    {
      label: "A propos"
    }
  ]

  public categories = [
    {
      label: "JCTOUCH"
    },
    {
      label: "JCHUB"
    },
    {
      label: "JCBOARD"
    },
    {
      label: "JCAIO"
    },
    {
      label: "JCSENS"
    },
    {
      label: "PHERIPHERALS"
    }
  ];

  constructor(private router: Router){

  }


  ngOnInit(): void {
  }


  public search(){
      this.router.navigate(["products",this.selectedProduct.id ])
  }

  onCategoryChange(value: any){
  this.productsToSelect = this.products.find(p => p.category.includes(value));
  console.log(this.productsToSelect)

  }



}

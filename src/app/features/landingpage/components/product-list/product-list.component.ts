import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{

  public currentList: any = [];

  products = [
    {
      category: "jctouch",
      products: [
        {
          id: 1,
          name: "JCTOUCH Flat Panel Display-AIO series",
          img: "https://www.jcvision-edu.com/upload/201811/20181130092605htykvz.jpg"
         },
         {
          id: 2,
           name: "JCTOUCH Flat Panel Display With IR Tech T Series",
           img: "https://www.jcvision-edu.com/upload/202205/202205261657023m0knu.png"
         },
         {
          id: 3,
           name: "JCTOUCH Flat Panel Display With IR Tech",
           img: "https://www.jcvision-edu.com/upload/201811/20181129224116t38ik6.jpg"
         },
         {
          id: 4,
           name: "JCTOUCH Capacitive Touch Screen",
           img: "https://www.jcvision-edu.com/upload/201811/20181130094355wts5lt.png"
         },
         {
          id: 5,
           name: "JCTOUCH Flat Panel Display With IR Tech TS Series",
           img: "https://www.jcvision-edu.com/upload/201811/2018113009480827ueia.png"
         },
         {
          id: 6,
          name: "JCTOUCH Flat Panel With IR Tech ES",
          img: "https://www.jcvision-edu.com/upload/201811/20181130095508cekym2.png"
         }

      ]
    },
    {
      category: "jchub",
      products: [
        {
          id: 7,
          name: "JCHUB Interactive Flat Panel Display-XP Series"
        },
        {
          id: 8,
          name: "JCHUB-IR Technology"
        },
        {
          id: 9,
          name: "JCHUB JCVision 86inch JCHub Interactive Flat Panel Display"
        },
        {
          id: 10,
          name: "JCHUB IR Tech Pro"
        },
        {
          id: 11,
          name: "JCHUB Capacitive Touch Screen"
        },
        {
          id: 12,
          name: "JCHUB JCVision Floor Stand"
        },
        {
          id: 13,
          name: "JCHUB CAST"
        }

      ]
    },
    {
      category: "jcboard",
      products: [
         {
          id: 14,
          name: "JCBOARD IR Technology With Speaker"
         },
         {
          id: 15,
          name: "JCBOARD IR Technology With Intelligent"
         },
         {
          id: 16,
          name: "JCBOARD IR Technology K Series"
         },
         {
          id: 17,
          name: "JCBOARD IR Technology-P Series"
         },
         {
          id: 18,
          name: "JCBOARD IR Technology-A Series"
         },
         {
          id: 19,
          name: "JCBOARD SU Series"
         },
         {
          id: 20,
          name: "JCBOARD EM Technology-F Series"
         },
         {
          id: 21,
          name: "JCBOARD Portable IWB-P9"
         }
      ]
    },
    {
      category: "jcboard",
      products: [
        {
          id: 22,
          name: "JCBOARD IR Technology With Speaker"
        },
        {
          id: 23,
          name: "JCBOARD IR Technology With Intelligent"
        },
        {
          id: 24,
          name: "JCBOARD IR Technology-K Series"
        },
        {
          id: 25,
          name: "JCBOARD IR Technology-P Series"
        },
        {
          id: 26,
          name: "JCBOARD IR Technology-A Series"
        },
        {
          id: 27,
          name: "JCBOARD SU Series"
        },
        {
          id: 28,
          name: "JCBOARD EM Technology-F Series"
        },
        {
          id: 29,
          name: "JCBOARD Portable IWB-P9"
        }
      ]
    },
    {
      category: "jcaio",
      products: [
         {
          id: 30,
          name: "JCVISION Digital Podium-JC-S600-F"
         },
         {
          id: 31,
          name: "JCVISION All-In-One Mutimedia System-A200"
         },
         {
          id: 32,
          name: "JCVISON Green Board & Whiteboard Solution-GW500"
         }
      ]
    },
    {
      category: "jcsense",
      products: [
        {
          id: 33,
          name: "3D Scanner for 3D Printer"
        },
        {
          id: 34,
          name: "Laser Engraving Machine-LSE301"
        },
        {
          id: 35,
          name: "3D Laser Cutting Machine L5/L7"
        }
      ]
    },

    {
      category: "peripherals",
      products: [
        {
          id: 36,
          name: "JCVISON OPS PC"
        },
        {
          id: 37,
          name: "JCVISION Coolpodium Digital Podium-JC-DP700"
        },
        {
          id: 38,
          name: "JCVISION Charging Cabinet-M50"
        },
        {
          id: 39,
          name: "JCVISON Interactive LED Projector-P300"
        },
        {
          id: 40,
          name: "JCVISON latest launch Educational Robot-JCROBO"
        },
        {
          id: 41,
          name: "JCVIEWER Documant Scanner -L Series"
        },
        {
          id: 42,
          name: "JCVIEWER Document Scanner-V Series"
        },
        {
          id: 43,
          name: "JCVIEWER Visualizer-JC-VL Series "
        },
        {
          id: 44,
          name: "JCVIEWER Document Scanner-A Series"
        },
        {
          id: 45,
          name: "Kid's Reading pen-TP1"
        },
        {
          id: 46,
          name: "Kid's Tablet-K72"
        }
      ]
    }

  ]



  constructor(){
  }

  ngOnInit(): void {
    this.loadProducts();

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
   this.currentList = this.products.find(v => v.category.includes(cat))?.products??[];
  }


}

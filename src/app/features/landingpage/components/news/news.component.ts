import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {


  public news: any[] = [
    {
      title: "JCVision attend China Import & Export Fair",
      publishedAt: " 2015-12-19",
      short: "JCVision Interactive Technology bring its latest products interactive flat panel display to attend China largest Import & Export Fair, also called Canton Fair.",
      content: "JCVision Interactive Technology bring its latest products interactive flat panel display to attend China largest Import & Export Fair, also called Canton Fair.",
      author: "jcvision"
    },
    {
      title: "JCVision Attend London BETT Show",
      short: "We JCVision will attend London BETT show from 21st to 25th Jan, look forward to seeing you at our booth.",
      publishedAt: "2015-12-19",
      content: "We JCVision will attend London BETT show from 21st to 25th Jan, look forward to seeing you at our booth.",
      author: "jcvision"
    },
    {
      title: "JCVision Attend Dubai GESS Show",
      short: "JCVision overseas sales team will attend Dubai GESS show, look forward to see you at our booth",
      publishedAt: "2015-12-19",
      content: "JCVision overseas sales team will attend Dubai GESS show, look forward to see you at our booth",
      author: "jcvision"
    }
  ];


  public imagesNews: any[] = [
    {
      id: "1",
      img: "https://www.jcvision-edu.com/upload/201610/20161005171503mcyeyh.jpg",
      label: "news 1",
      link: ""
    },
    {
      id: "2",
      img: "assets/images/news.jpg",
      label: "",
      link: "news 2"
    },
    {
      id: "3",
      img: "assets/images/news.jpg",
      label: "",
      link: "news 3"
    }

  ]


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
        items: 1
      },
      940: {
        items: 1
      },
      992:{
        items: 1
      },
     1200: {
         items: 1
      }
    },
    nav: false
  }


}

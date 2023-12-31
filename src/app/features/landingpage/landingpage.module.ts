import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './landingpage.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LandingPageRoutingModule } from './landingpage-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { NewsComponent } from './components/news/news.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { NewsCardComponent } from './components/news-card/news-card.component';



@NgModule({
  declarations: [
    LandingpageComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    ProductListComponent,
    AboutUsComponent,
    SolutionsComponent,
    NewsComponent,
    ProductDetailsComponent,
    NewsCardComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    CarouselModule

  ]
})
export class LandingpageModule { }

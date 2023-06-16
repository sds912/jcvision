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
    ProductListComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    CarouselModule

  ]
})
export class LandingpageModule { }

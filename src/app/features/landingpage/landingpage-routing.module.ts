import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
     path: '',
     component: LandingpageComponent,
     children: [
      {
        path: '',
        component: HomeComponent
      }
     ]

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }

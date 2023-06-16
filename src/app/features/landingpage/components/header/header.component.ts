import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

 public domaines = [
  {
    label: "education",
    img: "assets/images/education.jpg"
  },
  {
    label: "business",
    img: "assets/images/business.jpg"
  },
  {
    label: "solution",
    img: "assets/images/solution.jpg"
  }
 ]

}

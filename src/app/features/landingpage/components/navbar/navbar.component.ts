import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

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
      icon: "fa fa-facebook"
    },
    {
      icon: "fa fa-linkedin"
    },
    {
      icon: "fa fa-twitter"
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

  constructor(){}



}

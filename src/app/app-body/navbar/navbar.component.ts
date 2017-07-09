import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    navName = [
      {
        name : 'Biography',
        icon : 'fa fa-home',
        routerLinks : '/'
      },
      {
        name : 'Skills',
        icon : 'fa fa-bug',
        routerLinks : 'skills'
      },
      {
        name : 'Portfolio',
        icon : 'fa fa-image',
        routerLinks : 'portfolio'
      },
      {
        name : 'Experiance',
        icon : 'fa fa-superpowers',
        routerLinks : 'exp'
      },
      {
        name : 'Education',
        icon : 'fa fa-university',
        routerLinks : 'edu'
      },
      {
        name : 'certification',
        icon : 'fa fa-certificate',
        routerLinks : 'cert'
      },
      {
        name : 'Contact',
        icon : 'fa fa-envelope',
        routerLinks : 'contact'
      },
      {
        name : 'OnePage Portfolio',
        icon : 'fa fa-star',
        routerLinks : 'onePagePortfolio'
      }
    ]
  constructor() { }

  ngOnInit() {
  }

}

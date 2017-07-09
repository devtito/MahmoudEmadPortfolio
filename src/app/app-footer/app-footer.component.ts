import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss']
})
export class AppFooterComponent implements OnInit {
  socialIcon = [
    {
      link : 'https://www.facebook.com/jsdevelop',
      icon : 'fa fa-facebook'
    },
    {
      link : 'https://www.twitter.com/mahmoudemad23',
      icon : 'fa fa-twitter'
    },
    {
      link : 'https://www.linkedin.com/in/jsdevelop',
      icon : 'fa fa-linkedin'
    },
    {
      link : 'https://www.github.com/mahmoudemad23',
      icon : 'fa fa-github'
    },
    {
      link : 'https://www.codepen.io/jsdeveloper',
      icon : 'fa fa-codepen'
    },
    {
      link : 'https://www.instagram.com/devtito',
      icon : 'fa fa-instagram'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}

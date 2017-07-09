import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss']
})
export class BiographyComponent implements OnInit {
  bioTitle = "biography";
  name = "Mahmoud Emad";
  positionName = "Front-End Developer";
  developmentPosition = "Front-End Development";
  education = "CHI-EG system and information management";
  expYears = 3 + " Years";
  age = 21 + "Years old";
  social = [
    {
      name : "@jsdevelop",
      link : "https://www.facebook.com/jsdevelop",
      icon : "fa fa-facebook",
      siteName : "Facebook"
    },
    {
      name : "@jsdevelop",
      link : "https://www.linkedin.com/jsdevelop",
      icon : "fa fa-linkedin",
      siteName : "Linkedin"
    },
    {
      name : "@jsdeveloper",
      link : "https://www.codepen.io/jsdeveloper",
      icon : "fa fa-codepen",
      siteName : "Codepen"
    },
    {
      name : "@mahmoudemad23",
      link : "https://www.twitter.com/mahmoudemad23",
      icon : "fa fa-twitter",
      siteName : "Twitter"
    },
    {
      name : "@jsdevelop",
      link : "https://www.instagram.com/jsdevelop",
      icon : "fa fa-instagram",
      siteName : "Instagram"
    },
  ];
  constructor() {
  }

  ngOnInit() {
  }

}

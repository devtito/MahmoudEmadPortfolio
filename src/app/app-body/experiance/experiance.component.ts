import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiance',
  templateUrl: './experiance.component.html',
  styleUrls: ['./experiance.component.scss']
})
export class ExperianceComponent implements OnInit {
  experianceTitle = "experiance";
  companies = [
    {
      position : 'Front-End Developer',
      name : 'American Group',
      date : 'Jan 2017 - Jun 2017',
      description: 'Responsible for convert PSD to PUG & SCSS & Vue2JS code',
      website : 'http://www.agmep.us'
    },
    {
      position : 'Front-End Developer',
      name : 'Media Pan Arab',
      date : 'Aug 2016 - Jan 2017',
      description: 'Responsible for convert PSD to actual code in visual web apps && fix some JavaScript bugs',
      website : 'http://www.mediapanarab.com'
    },
    {
      position : 'Front-End Developer',
      name : 'Nerds Arena',
      date : 'Mar 2016 - Jul 2016',
      description: 'Responsible for convert PSD to HTML && CSS && jQuery code and test web Application for security Bugs ',
      website : 'http://www.nerdsarena.com'
    },
    {
      position : 'Front-End Developer',
      name : 'Squnity',
      date : 'Aug 2015 - Mar 2016',
      description: 'Responsible for convert PSD to PUG && SCSS && JS code && Penetration Testing',
      website : 'http://www.squnity.com'
    },
    {
      position : 'Front-End Developer',
      name : 'Go Web Egypt',
      date : 'Jan 2015 - Aug 2015',
      description: 'Responsible for convert PSD to HTML && CSS && jQuery code',
      website : 'http://www.gowebegypt.com'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}

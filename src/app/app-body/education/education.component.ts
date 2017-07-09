import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  educationSection = "Information System";
  education = "CHI-EG";
  educationDate = "2014 - Present";
  educationDescription = "";
  educationLink = "http://www.chi-eg.com";

  constructor() { }

  ngOnInit() {
  }

}

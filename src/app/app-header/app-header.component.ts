import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  name             =     "Mahmoud Emad";
  positionName     =     "Front-End Developer";
  address          =     "3st Aly hammouda, ElMassara, Cairo, Egypt";
  mobileNumber     =     "+20 111 2557 277";
  email            =     "mahmouddev23@gmail.com";
  websiteName      =     "www.mahmoudemad.com";
  websiteLink      =     "http://www.mahmoudemad.com";

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolio = [
    {
      name : "Screen Mix",
      link : "http://screen-mix.com",
      imagePath: "../../assets/images/portfolio/",
      image : "screenmix" + ".png",
      companyName : "@NerdsArena",
      companyLink : "http://nerdsarena.com",
    },
    {
      name : "AB Eqtisad",
      link : "http://abeqtisad.com",
      imagePath: "../../assets/images/portfolio/",
      image : "abeqtisad" + ".png",
      companyName : "@NerdsArena",
      companyLink : "http://nerdsarena.com",
    },
    {
      name : "Alex Engineering Syndicate",
      link : "http://www.alexengsyn.org",
      imagePath: "../../assets/images/portfolio/",
      image : "alexengsyn" + ".png",
      companyName : "@NerdsArena",
      companyLink : "http://nerdsarena.com",
    },
    {
      name : "Archfurp",
      link : "http://www.archfurp.com/",
      imagePath: "../../assets/images/portfolio/",
      image : "archfurp" + ".png",
      companyName : "@NerdsArena",
      companyLink : "http://nerdsarena.com",
    },
    {
      name : "Cuda",
      link : "../../assets/portfolio/cuda",
      imagePath: "../../assets/images/portfolio/",
      image : "cuda" + ".png",
      companyName : "Nun",
      companyLink : "Nun",
    },
    {
      name : "Kaizen Print",
      link : "http://www.kzprint.com",
      imagePath: "../../assets/images/portfolio/",
      image : "kzprint" + ".png",
      companyName : "@NerdsArena",
      companyLink : "http://nerdsarena.com",
    },
    {
      name : "Prof Mohamed Ragab",
      link : "http://www.profmragab.com",
      imagePath: "../../assets/images/portfolio/",
      image : "profmragab" + ".png",
      companyName : "@NerdsArena",
      companyLink : "http://nerdsarena.com",
    },
    {
      name : "Rim Banna",
      link : "../../assets/portfolio/cuda",
      imagePath: "../../assets/images/portfolio/",
      image : "rim" + ".png",
      companyName : "Nun",
      companyLink : "Nun",
    },
    {
      name : "Wow Up To",
      link : "https://en-ae.wowupto.com",
      imagePath: "../../assets/images/portfolio/",
      image : "wowupto" + ".png",
      companyName : "@NerdsArena",
      companyLink : "http://nerdsarena.com",
    },
    {
      name : "Shamlola",
      link : "http://www.shamlola.com",
      imagePath: "../../assets/images/portfolio/",
      image : "shamlola" + ".png",
      companyName : "@MediaPanArab",
      companyLink : "http://mediapanarab.com",
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}

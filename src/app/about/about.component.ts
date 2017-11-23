import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutText: string;
  constructor() { }

  ngOnInit() {
    this.aboutText = `
      Our adventure as Ragdoll Breeders began in September of 2012 when we bought our first two Ragdolls, Archie and Merlin.

    `;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  private amaliasRagdollsFacebookUrl = 'https://www.facebook.com/amaliasragdolls';

  constructor() { }

  goToAmaliasRagdolls() {
    window.open(this.amaliasRagdollsFacebookUrl, '_blank')

  }

  ngOnInit() {
  }

}

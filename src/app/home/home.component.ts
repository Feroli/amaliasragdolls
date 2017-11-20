import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videoUrl: string;

  constructor(private router: Router) { }

  goToAbout() {
    this.router.navigateByUrl('/about');
  };

  ngOnInit() {
    this.videoUrl = '../assets/beatbox';
  }

}

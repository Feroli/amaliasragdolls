import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videoUrl: string;
  cat: object;

  constructor(private router: Router) { }

  goToAbout() {
    this.router.navigateByUrl('/about');
  };

  ngOnInit() {
    this.videoUrl = '../assets/beatbox';
    this.cat = { 'location': 'http://3.bp.blogspot.com/-cKkcZkF8BbU/VXNbmbk7mNI/AAAAAAAATDQ/dt9ffqmJPoU/s1600/otto-2.jpg', 'description': 'des...', 'title': 'ozzy' };

  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videoUrl: string;
  cat;

  constructor(private router: Router) { }

  goToAbout() {
    this.router.navigateByUrl('/about');
  };

  ngOnInit() {
    this.videoUrl = '../assets/beatbox';
    this.cat = { 'location': 'http://3.bp.blogspot.com/-cKkcZkF8BbU/VXNbmbk7mNI/AAAAAAAATDQ/dt9ffqmJPoU/s1600/otto-2.jpg', 'description': 'des...', 'title': 'ozzy' };

    $('.nav-wrapper').addClass('transparent_background');
    $('nav').addClass('z-depth-1');

    $('.nav-wrapper').removeClass('grey');
    $('.nav-wrapper').removeClass('darken-4');
    $('nav').removeClass('z-depth-2');



  }


  ngOnDestroy() {
    $('.nav-wrapper').addClass('grey');
    $('.nav-wrapper').addClass('darken-4');
    $('nav').addClass('z-depth-2');
    $('nav').removeClass('z-depth-1');



  }

}

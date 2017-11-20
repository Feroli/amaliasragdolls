import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  imageArray: Array<object>;
  constructor() { }

  ngOnInit() {
    this.imageArray = [
      {'location': '../assets/otto.jpg', 'description': 'des...'},
      {'location': '../assets/otto.jpg', 'description': 'des...'},
      {'location': '../assets/otto.jpg', 'description': 'des...'},
      {'location': '../assets/otto.jpg', 'description': 'des...'},
      {'location': '../assets/otto.jpg', 'description': 'des...'},
      {'location': '../assets/otto.jpg', 'description': 'des...'},
      {'location': '../assets/otto.jpg', 'description': 'des...'},
      {'location': '../assets/otto.jpg', 'description': 'des...'},
      {'location': '../assets/otto.jpg', 'description': 'des...'},
      {'location': '../assets/otto.jpg', 'description': 'des...'},
      {'location': '../assets/otto.jpg', 'description': 'des...'},
      {'location': '../assets/otto.jpg', 'description': 'des...'},
      {'location': '../assets/otto.jpg', 'description': 'des...'},
      {'location': '../assets/otto.jpg', 'description': 'des...'},
      {'location': '../assets/otto.jpg', 'description': 'des...'},
      {'location': '../assets/otto.jpg', 'description': 'des...'},
      {'location': '../assets/otto.jpg', 'description': 'des...'},
      {'location': '../assets/otto.jpg', 'description': 'des...'},
      {'location': '../assets/otto.jpg', 'description': 'des...'},
      {'location': '../assets/otto.jpg', 'description': 'des...'},
      {'location': '../assets/otto.jpg', 'description': 'des...'},
      {'location': '../assets/otto.jpg', 'description': 'des...'},
      {'location': '../assets/otto.jpg', 'description': 'des...'},
      {'location': '../assets/otto.jpg', 'description': 'des...'},
      {'location': '../assets/otto.jpg', 'description': 'des...'},
    ];

  }

}

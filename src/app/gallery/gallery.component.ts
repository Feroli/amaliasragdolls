import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  imageArray: Array<object>;
  hoveredId: number;
  depth5 = 'z-depth-5';
  depth1 = 'z-depth-1';
  constructor() { }

  mouseEnter(event: MouseEvent, id: number) {
    this.hoveredId = id;
    console.log(this.hoveredId);
    this.depth5 = event.type == 'mouseenter' ? 'z-depth-5' : 'z-depth-1';
  }

  mouseLeave(event: MouseEvent) {
    this.depth1 = 'z-depth-1';
    this.depth5 = 'z-depth-1';
  }

  ngOnInit() {
    this.imageArray = [
      {'location': '../assets/otto.jpg', 'description': 'des...', 'title': 'otto'},
      {'location': '../assets/otto.jpg', 'description': 'des...', 'title': 'otto'},
      {'location': '../assets/otto.jpg', 'description': 'des...', 'title': 'otto'},
      {'location': '../assets/otto.jpg', 'description': 'des...', 'title': 'otto'},
      {'location': '../assets/otto.jpg', 'description': 'des...', 'title': 'otto'},
      {'location': '../assets/otto.jpg', 'description': 'des...', 'title': 'otto'},
      {'location': '../assets/otto.jpg', 'description': 'des...', 'title': 'otto'},
      {'location': '../assets/otto.jpg', 'description': 'des...', 'title': 'otto'},
      {'location': '../assets/otto.jpg', 'description': 'des...', 'title': 'otto'},
      {'location': '../assets/otto.jpg', 'description': 'des...', 'title': 'otto'},
      {'location': '../assets/otto.jpg', 'description': 'des...', 'title': 'otto'},
      {'location': '../assets/otto.jpg', 'description': 'des...', 'title': 'otto'},
      {'location': '../assets/otto.jpg', 'description': 'des...', 'title': 'otto'},
      {'location': '../assets/otto.jpg', 'description': 'des...', 'title': 'otto'},
      {'location': '../assets/otto.jpg', 'description': 'des...', 'title': 'otto'},
      {'location': '../assets/otto.jpg', 'description': 'des...', 'title': 'otto'},
      {'location': '../assets/otto.jpg', 'description': 'des...', 'title': 'otto'},
      {'location': '../assets/otto.jpg', 'description': 'des...', 'title': 'otto'},
      {'location': '../assets/otto.jpg', 'description': 'des...', 'title': 'otto'},
      {'location': '../assets/otto.jpg', 'description': 'des...', 'title': 'otto'},
      {'location': '../assets/otto.jpg', 'description': 'des...', 'title': 'otto'},
      {'location': '../assets/otto.jpg', 'description': 'des...', 'title': 'otto'},
      {'location': '../assets/otto.jpg', 'description': 'des...', 'title': 'otto'},
      {'location': '../assets/otto.jpg', 'description': 'des...', 'title': 'otto'},
      {'location': '../assets/otto.jpg', 'description': 'des...', 'title': 'otto'},
    ];

  }

}

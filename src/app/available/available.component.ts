import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-available',
  templateUrl: './available.component.html',
  styleUrls: ['./available.component.css']
})
export class AvailableComponent implements OnInit {

  availableCats: Array<object>;
  hoveredId: number;
  depth5 = 'z-depth-5'
  depth1 = 'z-depth-1'
  constructor() { }

  mouseEnter(event: MouseEvent, id: number) {
    this.hoveredId = id;
    this.depth5 = event.type == 'mouseenter' ? 'z-depth-5' : 'z-depth-1';
  }

  mouseLeave(event: MouseEvent) {
    this.depth1 = 'z-depth-1';
    this.depth5 = 'z-depth-1';
  }

  ngOnInit() {
    this.availableCats = [

            { 'location': 'http://3.bp.blogspot.com/-cKkcZkF8BbU/VXNbmbk7mNI/AAAAAAAATDQ/dt9ffqmJPoU/s1600/otto-2.jpg', 'description': 'des...', 'title': 'ozzy' },
            { 'location': 'http://3.bp.blogspot.com/-cKkcZkF8BbU/VXNbmbk7mNI/AAAAAAAATDQ/dt9ffqmJPoU/s1600/otto-2.jpg', 'description': 'des...', 'title': 'ozzy' },
            { 'location': 'http://3.bp.blogspot.com/-cKkcZkF8BbU/VXNbmbk7mNI/AAAAAAAATDQ/dt9ffqmJPoU/s1600/otto-2.jpg', 'description': 'des...', 'title': 'ozzy' },
            { 'location': 'http://3.bp.blogspot.com/-cKkcZkF8BbU/VXNbmbk7mNI/AAAAAAAATDQ/dt9ffqmJPoU/s1600/otto-2.jpg', 'description': 'des...', 'title': 'ozzy' },
            { 'location': 'http://3.bp.blogspot.com/-cKkcZkF8BbU/VXNbmbk7mNI/AAAAAAAATDQ/dt9ffqmJPoU/s1600/otto-2.jpg', 'description': 'des...', 'title': 'ozzy' },
            { 'location': 'http://3.bp.blogspot.com/-cKkcZkF8BbU/VXNbmbk7mNI/AAAAAAAATDQ/dt9ffqmJPoU/s1600/otto-2.jpg', 'description': 'des...', 'title': 'ozzy' },
            { 'location': 'http://3.bp.blogspot.com/-cKkcZkF8BbU/VXNbmbk7mNI/AAAAAAAATDQ/dt9ffqmJPoU/s1600/otto-2.jpg', 'description': 'des...', 'title': 'ozzy' }

          ]
  }

}

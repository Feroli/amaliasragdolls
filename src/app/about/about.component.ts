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
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent maximus eu nisl vel accumsan. Maecenas volutpat fringilla nulla, in blandit diam dapibus eu. Nam a nunc felis. Etiam eu mi quis ipsum luctus euismod. Donec quis pulvinar ex, id laoreet odio. Aliquam erat volutpat. Mauris sed pellentesque velit. Donec accumsan pulvinar lorem, vel vestibulum magna venenatis nec. Maecenas tincidunt nibh eu auctor molestie. Fusce aliquam massa vitae molestie euismod. Quisque sit amet accumsan sem. Aenean tincidunt sem ac massa auctor, fermentum congue eros blandit. Etiam vitae quam enim. Donec ultrices odio leo, nec porttitor augue convallis id.

    Vivamus nec dui scelerisque, venenatis odio ut, ultricies eros. Etiam et enim ante. Vivamus molestie velit ut nulla blandit, vitae sagittis felis pretium. In vitae porta ipsum. Nulla id scelerisque lacus. Pellentesque tortor ipsum, ultricies quis eros sed, volutpat viverra purus. Duis accumsan, est sit amet cursus vehicula, odio mi condimentum justo, at gravida lorem diam in augue. Aenean vitae aliquet diam, a maximus dui. Donec vel tortor at magna imperdiet tristique. Praesent laoreet ultricies libero, quis ullamcorper tellus lobortis eget. Vivamus sed arcu facilisis arcu accumsan efficitur. Nullam odio dui, condimentum in nunc nec, ornare pulvinar lectus. Duis luctus pulvinar hendrerit. Phasellus eu arcu id purus luctus aliquet in eget nulla.

    Aliquam blandit mollis ornare. Maecenas feugiat eleifend nisi nec malesuada. Curabitur volutpat, nisl sed convallis elementum, sapien sem fringilla nisl, sed eleifend ipsum lectus ac urna. Nullam elementum neque quis interdum commodo. Fusce ac feugiat purus. Vestibulum eu vestibulum dolor. Aenean interdum vulputate augue. Duis rhoncus nunc et tellus placerat, vel pharetra turpis tempor.

    In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus vel nisl et diam accumsan tempor id laoreet eros. Cras nec tellus diam. Phasellus ac facilisis velit. Vestibulum varius risus nibh, at placerat ligula dignissim vel. Vivamus vel vulputate eros, sed tristique justo. Nam eget lorem nisi. Proin dignissim enim at ipsum efficitur condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

    Suspendisse potenti. Phasellus eget nisi vitae leo tincidunt tempus. Donec ultricies ipsum eros, consectetur sollicitudin sem ultricies at. Morbi arcu nulla, pulvinar vitae purus in, hendrerit egestas lorem. Curabitur quis egestas orci. Ut sollicitudin dapibus tempus. Morbi auctor bibendum sem ut hendrerit. Vivamus eu justo et nisl interdum tristique. Praesent et lacus in arcu pharetra vehicula.
    `;
  }

}

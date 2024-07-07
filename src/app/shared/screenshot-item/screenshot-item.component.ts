import { Component, Input } from '@angular/core';
import { GenericImage } from 'src/app/models/image';

@Component({
  selector: 'screenshot-item',
  templateUrl: './screenshot-item.component.html',
  styleUrls: ['./screenshot-item.component.scss']
})
export class ScreenshotItemComponent {

  @Input({required: true}) img: GenericImage;

  constructor() { }

}

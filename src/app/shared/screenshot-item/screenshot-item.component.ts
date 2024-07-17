import { Component, Input } from '@angular/core';
import { Image } from 'src/app/models/image';

@Component({
  selector: 'screenshot-item',
  templateUrl: './screenshot-item.component.html',
  styleUrls: ['./screenshot-item.component.scss'],
  standalone: true,
  imports: [],
})
export class ScreenshotItemComponent {
  @Input({ required: true }) img: Image;

  constructor() {}
}

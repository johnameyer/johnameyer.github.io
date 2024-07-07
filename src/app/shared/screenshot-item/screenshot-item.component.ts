import { Component, Input } from '@angular/core';
import { GenericImage } from 'src/app/models/image';
import { NgIf } from '@angular/common';

@Component({
    selector: 'screenshot-item',
    templateUrl: './screenshot-item.component.html',
    styleUrls: ['./screenshot-item.component.scss'],
    standalone: true,
    imports: [NgIf]
})
export class ScreenshotItemComponent {

  @Input({required: true}) img: GenericImage;

  constructor() { }

}

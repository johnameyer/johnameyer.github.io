import { Component, Input, OnInit } from '@angular/core';
import { GenericImage } from 'src/app/models/image';

@Component({
  selector: 'screenshot-item',
  templateUrl: './screenshot-item.component.html',
  styleUrls: ['./screenshot-item.component.scss']
})
export class ScreenshotItemComponent implements OnInit {

  @Input('img') img: GenericImage;

  constructor() { }

  ngOnInit(): void {
  }

}

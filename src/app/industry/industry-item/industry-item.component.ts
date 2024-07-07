import { Component, Input } from '@angular/core';
import { IndustryPosition } from 'src/app/models/industry-project';

@Component({
  selector: 'industry-item',
  templateUrl: './industry-item.component.html',
  styleUrls: ['./industry-item.component.scss']
})
export class IndustryItemComponent {

  @Input({required: true}) position: IndustryPosition;

  constructor() { }

}

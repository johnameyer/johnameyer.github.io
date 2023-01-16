import { Component, Input, OnInit } from '@angular/core';
import { IndustryPosition } from 'src/app/models/industry-project';

@Component({
  selector: 'industry-item',
  templateUrl: './industry-item.component.html',
  styleUrls: ['./industry-item.component.scss']
})
export class IndustryItemComponent {

  @Input() position: IndustryPosition;

  constructor() { }

}

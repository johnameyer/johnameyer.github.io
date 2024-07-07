import { Component, OnInit } from '@angular/core';
import { IndustryPosition } from 'src/app/models/industry-project';
import { industryPositions } from '../industry';
import { IndustryItemComponent } from '../industry-item/industry-item.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-industry-list',
    templateUrl: './industry-list.component.html',
    styleUrls: ['./industry-list.component.scss'],
    standalone: true,
    imports: [NgFor, IndustryItemComponent]
})
export class IndustryListComponent {
  
  selectedPositions: IndustryPosition[] = industryPositions;

  constructor() { }
  
  trackBy(position: IndustryPosition) {
    return position.slug;
  }
}

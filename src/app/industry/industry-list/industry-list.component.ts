import { Component, OnInit } from '@angular/core';
import { IndustryPosition } from 'src/app/models/industry-project';
import { industryPositions } from '../industry';

@Component({
  selector: 'app-industry-list',
  templateUrl: './industry-list.component.html',
  styleUrls: ['./industry-list.component.scss']
})
export class IndustryListComponent implements OnInit {
  
  selectedPositions: IndustryPosition[] = industryPositions;

  constructor() { }

  ngOnInit() {
  }

  
  trackBy(position: IndustryPosition) {
    return position.slug;
  }
}

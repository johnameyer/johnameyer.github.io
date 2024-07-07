import { Component, OnInit } from '@angular/core';
import { IndustryPosition } from 'src/app/models/industry-project';
import { industryPositions } from '../industry';
import { IndustryItemComponent } from '../industry-item/industry-item.component';


@Component({
    selector: 'app-industry-list',
    templateUrl: './industry-list.component.html',
    styleUrls: ['./industry-list.component.scss'],
    standalone: true,
    imports: [IndustryItemComponent]
})
export class IndustryListComponent {
  
  selectedPositions: IndustryPosition[] = industryPositions;

  constructor() { }
}

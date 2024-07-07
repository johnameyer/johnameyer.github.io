import { Component, Input } from '@angular/core';
import { IndustryPosition } from 'src/app/models/industry-project';
import { RouterLink } from '@angular/router';
import { TechnologyBadgeComponent } from '../../shared/technology-badge/technology-badge.component';


@Component({
    selector: 'industry-item',
    templateUrl: './industry-item.component.html',
    styleUrls: ['./industry-item.component.scss'],
    standalone: true,
    imports: [TechnologyBadgeComponent, RouterLink]
})
export class IndustryItemComponent {

  @Input({required: true}) position: IndustryPosition;

  constructor() { }

}

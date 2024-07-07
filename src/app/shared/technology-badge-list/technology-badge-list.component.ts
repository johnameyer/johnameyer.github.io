import { Component, Input } from '@angular/core';
import { TechnologyBadgeComponent } from '../technology-badge/technology-badge.component';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'technology-badge-list',
    templateUrl: './technology-badge-list.component.html',
    styleUrls: ['./technology-badge-list.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor, TechnologyBadgeComponent]
})
export class TechnologyBadgeListComponent {
  @Input({required: true}) technologies: String[];

  constructor() { }

}

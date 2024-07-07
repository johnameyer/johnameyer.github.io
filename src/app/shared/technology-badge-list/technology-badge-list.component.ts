import { Component, Input } from '@angular/core';

@Component({
  selector: 'technology-badge-list',
  templateUrl: './technology-badge-list.component.html',
  styleUrls: ['./technology-badge-list.component.scss']
})
export class TechnologyBadgeListComponent {
  @Input({required: true}) technologies: String[];

  constructor() { }

}

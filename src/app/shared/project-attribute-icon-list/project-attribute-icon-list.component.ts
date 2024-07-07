import { Component, Input } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'project-attribute-icon-list',
  templateUrl: './project-attribute-icon-list.component.html',
  styleUrls: ['./project-attribute-icon-list.component.scss']
})
export class ProjectAttributeIconListComponent {

  @Input({required: true}) project: Project;

  constructor() { }
  
  getAwardsJoined(awards: any[]): string {
    return awards.map(award => award.award + ' (' + award.from + ')').join(' & ');
  }

}

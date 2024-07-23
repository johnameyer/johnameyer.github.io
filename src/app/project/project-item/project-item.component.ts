import { Component, Input } from '@angular/core';
import { StandaloneProject } from 'src/app/models/standalone-project';
import { TechnologyBadgeComponent } from '../../shared/technology-badge/technology-badge.component';
import { RouterLink } from '@angular/router';
import { ProjectAttributeIconListComponent } from '../../shared/project-attribute-icon-list/project-attribute-icon-list.component';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  standalone: true,
  imports: [ProjectAttributeIconListComponent, RouterLink, TechnologyBadgeComponent],
})
export class ProjectItemComponent {
  @Input({ required: true }) project: StandaloneProject;

  constructor() {}
}

import { Component, Input } from '@angular/core';
import { Project } from 'src/app/models/project';
import { TechnologyBadgeComponent } from '../../shared/technology-badge/technology-badge.component';
import { RouterLink } from '@angular/router';
import { ProjectAttributeIconListComponent } from '../../shared/project-attribute-icon-list/project-attribute-icon-list.component';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-project-item',
    templateUrl: './project-item.component.html',
    styleUrls: ['./project-item.component.scss'],
    standalone: true,
    imports: [NgIf, ProjectAttributeIconListComponent, RouterLink, NgFor, TechnologyBadgeComponent]
})
export class ProjectItemComponent {

  @Input({required: true}) project: Project;

  constructor() { }
}

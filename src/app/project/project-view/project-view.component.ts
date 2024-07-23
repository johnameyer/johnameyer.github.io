import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { projects } from '../projects';
import { Project } from 'src/app/models/project';
import { ScreenshotItemComponent } from '../../shared/screenshot-item/screenshot-item.component';
import { LinkItemComponent } from '../../shared/link-item/link-item.component';
import { TechnologyBadgeListComponent } from '../../shared/technology-badge-list/technology-badge-list.component';
import { TextSectionComponent } from '../../shared/text-section/text-section.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss'],
  standalone: true,
  imports: [TextSectionComponent, TechnologyBadgeListComponent, LinkItemComponent, ScreenshotItemComponent, AsyncPipe],
})
export class ProjectViewComponent {
  project: Project | undefined = undefined;

  @Input()
  set slug(slug: string) {
    this.project = projects.find(project => slug === project.slug);
  }
}

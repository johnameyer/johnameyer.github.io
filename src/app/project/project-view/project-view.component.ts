import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { projects } from '../projects';
import { Project } from 'src/app/models/project';
import { ScreenshotItemComponent } from '../../shared/screenshot-item/screenshot-item.component';
import { LinkItemComponent } from '../../shared/link-item/link-item.component';
import { TechnologyBadgeListComponent } from '../../shared/technology-badge-list/technology-badge-list.component';
import { TextSectionComponent } from '../../shared/text-section/text-section.component';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-project-view',
    templateUrl: './project-view.component.html',
    styleUrls: ['./project-view.component.scss'],
    standalone: true,
    imports: [NgIf, TextSectionComponent, TechnologyBadgeListComponent, NgFor, LinkItemComponent, ScreenshotItemComponent, AsyncPipe]
})
export class ProjectViewComponent implements OnInit {
  project$: Observable<Project>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.project$ = this.route.params.pipe(map(params => projects.find(project => params.slug === project.slug)));
  }
}

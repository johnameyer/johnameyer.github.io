import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { IndustryPosition } from 'src/app/models/industry-project';
import { Project } from 'src/app/models/project';
import { projects } from 'src/app/project/projects';
import { industryPositions } from '../industry';
import { ScreenshotItemComponent } from '../../shared/screenshot-item/screenshot-item.component';
import { LinkItemComponent } from '../../shared/link-item/link-item.component';
import { TechnologyBadgeListComponent } from '../../shared/technology-badge-list/technology-badge-list.component';
import { TextSectionComponent } from '../../shared/text-section/text-section.component';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-industry-view',
    templateUrl: './industry-view.component.html',
    styleUrls: ['./industry-view.component.scss'],
    standalone: true,
    imports: [TextSectionComponent, TechnologyBadgeListComponent, LinkItemComponent, ScreenshotItemComponent, AsyncPipe]
})
export class IndustryViewComponent {
  industryPosition: IndustryPosition | undefined;

  @Input()
  set slug(slug: string) {
    this.industryPosition = industryPositions.find(position => slug === position.slug);
  }
}

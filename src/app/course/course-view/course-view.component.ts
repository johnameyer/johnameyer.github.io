import { Component, Input } from '@angular/core';
import { courses } from '../courses';
import { Course } from 'src/app/models/course';
import { LinkItemComponent } from '../../shared/link-item/link-item.component';
import { TechnologyBadgeListComponent } from '../../shared/technology-badge-list/technology-badge-list.component';
import { TextSectionComponent } from '../../shared/text-section/text-section.component';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-course-view',
    templateUrl: './course-view.component.html',
    styleUrls: ['./course-view.component.scss'],
    standalone: true,
    imports: [TextSectionComponent, TechnologyBadgeListComponent, LinkItemComponent, AsyncPipe]
})
export class CourseViewComponent {
  course: Course | undefined;

  @Input()
  set slug(slug: string) {
    this.course = courses.find(course => slug === course.subj + course.num);
  }
}

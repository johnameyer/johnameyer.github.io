import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { CourseProject, HomeCourseProject } from '../models/course-project';
import { StandaloneProject } from '../models/standalone-project';
import { IndustryPosition, isIndustryPosition } from '../models/industry-position';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-home-item',
  templateUrl: './home-item.component.html',
  standalone: true,
  imports: [CardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeItemComponent {
  project = input.required<StandaloneProject | HomeCourseProject | IndustryPosition>();

  constructor() {}

  title = computed(() => {
    const project = this.project();
    if (isIndustryPosition(project)) {
      return `${project.title} @ ${project.company}`;
    } else {
      return project.title;
    }
  });

  getLink = computed(() => {
    const project = this.project();
    if ('link' in project) {
      return project.link;
    }
    return '/project/' + project.slug;
  });

  renderDate = computed(() => {
    const project = this.project();
    if ('semester' in project) {
      if (project.duration) {
        return project.duration + ' - ' + project.semester[0] + ' ' + project.semester[1];
      } else {
        return project.semester[0] + ' ' + project.semester[1];
      }
    } else {
      if (project.startDate != project.endDate) {
        return project.startDate + ' - ' + project.endDate;
      } else {
        return project.startDate;
      }
    }
  });

  protected isIndustryPosition = isIndustryPosition;
}

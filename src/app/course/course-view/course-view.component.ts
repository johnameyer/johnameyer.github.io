import { ChangeDetectionStrategy, Component, Input, computed, input } from '@angular/core';
import { courses } from '../courses';
import { Course, matchesSlug } from 'src/app/models/course';
import { ViewComponent } from 'src/app/shared/view/view.component';
import { DetailViewComponent } from '../../shared/detail-view/detail-view.component';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.scss'],
  standalone: true,
  imports: [ViewComponent, DetailViewComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseViewComponent {
  course = input.required<Course>();

  subtitle = computed(() => `${this.course().semester[0]} ${this.course().semester[1]}`);
}

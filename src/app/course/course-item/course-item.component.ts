import { Component, Input, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Course } from 'src/app/models/course';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CardComponent],
})
export class CourseItemComponent {
  @Input({ required: true }) course: Course;
  isBodyClamped = false;

  constructor(private changeDetector: ChangeDetectorRef) {}

  title = () => `${this.course.subj} ${this.course.num} ${this.course.name}`;

  subtitle = () => `${this.course.semester[0]} ${this.course.semester[1]}`;

  linkText() {
    let text = 'See';
    if (this.isBodyClamped) {
      text += ' Full Description';
      if (this.course.projects?.length) {
        text += ' and';
      }
    }
    if (this.course.projects?.length) {
      text += ' Course Project';
      if (this.course.projects?.length > 1) {
        text += 's';
      }
    }
    return text;
  }

  onClamp(clamp: boolean) {
    this.isBodyClamped = clamp;
    this.changeDetector.detectChanges();
  }
}

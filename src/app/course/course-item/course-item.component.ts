import { Component, Input, ElementRef, ChangeDetectorRef, ChangeDetectionStrategy, ViewChild, AfterViewInit } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements AfterViewInit {

  @Input({required: true}) course: Course;
  shouldTruncate = true;
  isBodyClamped = false;
  @ViewChild('body') body: ElementRef<HTMLParagraphElement>;

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.checkForClamp();
    window.addEventListener('resize', () => this.checkForClamp());
  }

  checkForClamp() {
    this.isBodyClamped = this.body.nativeElement.scrollHeight > this.body.nativeElement.clientHeight;
    this.changeDetector.detectChanges();
  }

  linkText() {
    let text = 'See';
    if(this.isBodyClamped) {
      text += ' Full Description';
      if(this.course.projects?.length) {
        text += ' and';
      }
    }
    if(this.course.projects?.length) {
      text += ' Course Project';
      if(this.course.projects?.length > 1) {
        text+= 's'
      }
    }
    return text;
  }
}

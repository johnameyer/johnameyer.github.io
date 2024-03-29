import { Component, OnInit, Input, ElementRef, ChangeDetectorRef, ChangeDetectionStrategy, AfterContentInit, ViewChild, AfterContentChecked, AfterViewChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements AfterViewInit {

  @Input() course;
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

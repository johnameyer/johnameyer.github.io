import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { courses } from '../courses';
import ColorUtil from '../../color-util';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.scss']
})
export class CourseViewComponent implements OnInit {
  course$: Observable<Course>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    ColorUtil.init();
    this.course$ = this.route.params.pipe(map(params => courses.find(course => params.slug === course.subj + course.num)));
  }

}

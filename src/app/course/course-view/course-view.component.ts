import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { courses } from '../courses';
import ColorUtil from '../../color-util';
import { Course } from 'src/app/models/course';
import { LinkItemComponent } from '../../shared/link-item/link-item.component';
import { TechnologyBadgeListComponent } from '../../shared/technology-badge-list/technology-badge-list.component';
import { TextSectionComponent } from '../../shared/text-section/text-section.component';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-course-view',
    templateUrl: './course-view.component.html',
    styleUrls: ['./course-view.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor, TextSectionComponent, TechnologyBadgeListComponent, LinkItemComponent, AsyncPipe]
})
export class CourseViewComponent implements OnInit {
  course$: Observable<Course>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    ColorUtil.init();
    this.course$ = this.route.params.pipe(map(params => courses.find(course => params.slug === course.subj + course.num)));
  }

}

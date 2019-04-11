import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseViewComponent } from './course-view/course-view.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseRoutingModule } from './course-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    CoursesListComponent,
    CourseViewComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    NgbModule,
    FontAwesomeModule
  ]
})
export class CourseModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseViewComponent } from './course-view/course-view.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseRoutingModule } from './course-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CourseItemComponent } from './course-item/course-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CoursesListComponent,
    CourseViewComponent,
    CourseItemComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    NgbModule,
    FontAwesomeModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CourseModule { }

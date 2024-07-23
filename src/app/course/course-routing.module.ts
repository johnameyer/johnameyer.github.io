import { Routes } from '@angular/router';
import { CourseViewComponent } from './course-view/course-view.component';
import { CoursesListComponent } from './courses-list/courses-list.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesListComponent,
    pathMatch: 'full',
  },
  {
    path: ':slug',
    component: CourseViewComponent,
  },
];

export default routes;

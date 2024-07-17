import { ActivatedRouteSnapshot, Route, RouterStateSnapshot, Routes, UrlSegment } from '@angular/router';
import { CourseViewComponent } from './course-view/course-view.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { courses } from './courses';
import { matchesSlug } from '../models/course';
import { NotFoundComponent } from '../shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesListComponent,
    pathMatch: 'full',
  },
  {
    path: ':slug',
    component: CourseViewComponent,
    canMatch: [(_: Route, [{ path: slug }]: UrlSegment[]) => courses.find(matchesSlug(slug)) != undefined],
    resolve: {
      course: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
        courses.find(matchesSlug(route.params['slug'])),
    },
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: {
      message: 'Course not found!',
    },
  },
];

export default routes;

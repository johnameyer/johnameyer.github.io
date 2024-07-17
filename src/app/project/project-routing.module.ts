import { ActivatedRouteSnapshot, Route, RouterStateSnapshot, Routes, UrlSegment } from '@angular/router';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { NotFoundComponent } from '../shared/not-found/not-found.component';
import { projects } from './projects';
import { matchesSlug } from '../models/standalone-project';

const routes: Routes = [
  {
    path: '',
    component: ProjectsListComponent,
    pathMatch: 'full',
  },
  {
    path: ':slug',
    component: ProjectViewComponent,
    canMatch: [(_: Route, [{ path: slug }]: UrlSegment[]) => projects.find(matchesSlug(slug)) != undefined],
    resolve: {
      project: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
        projects.find(matchesSlug(route.params['slug'])),
    },
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: {
      message: 'Project not found!',
    },
  },
];

export default routes;

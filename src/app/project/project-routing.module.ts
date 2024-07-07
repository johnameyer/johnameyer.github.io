import { Routes } from '@angular/router';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectViewComponent } from './project-view/project-view.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsListComponent,
    pathMatch: 'full'
  },
  {
    path: ':slug',
    component: ProjectViewComponent
  }
];

export default routes;

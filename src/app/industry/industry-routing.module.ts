import { Routes } from '@angular/router';
import { IndustryListComponent } from './industry-list/industry-list.component';
import { IndustryViewComponent } from './industry-view/industry-view.component';

const routes: Routes = [
  {
    path: '',
    component: IndustryListComponent,
    pathMatch: 'full',
  },
  {
    path: ':slug',
    component: IndustryViewComponent,
  },
];

export default routes;

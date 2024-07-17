import { ActivatedRouteSnapshot, Route, RouterStateSnapshot, Routes, UrlSegment } from '@angular/router';
import { IndustryListComponent } from './industry-list/industry-list.component';
import { IndustryViewComponent } from './industry-view/industry-view.component';
import { NotFoundComponent } from '../shared/not-found/not-found.component';
import { industryPositions } from './industry';
import { matchesSlug } from '../models/industry-position';

const routes: Routes = [
  {
    path: '',
    component: IndustryListComponent,
    pathMatch: 'full',
  },
  {
    path: ':slug',
    component: IndustryViewComponent,
    canMatch: [(_: Route, [{ path: slug }]: UrlSegment[]) => industryPositions.find(matchesSlug(slug)) != undefined],
    resolve: {
      industryPosition: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
        industryPositions.find(matchesSlug(route.params['slug'])),
    },
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: {
      message: 'Position not found!',
    },
  },
];

export default routes;

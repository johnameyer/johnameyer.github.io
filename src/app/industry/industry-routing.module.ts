import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndustryListComponent } from './industry-list/industry-list.component';
import { IndustryViewComponent } from './industry-view/industry-view.component';

const routes: Routes = [
  {
    path: '',
    component: IndustryListComponent,
    pathMatch: 'full'
  },
  {
    path: ':slug',
    component: IndustryViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndustryRoutingModule { }

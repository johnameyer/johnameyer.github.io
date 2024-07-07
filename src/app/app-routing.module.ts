import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeViewComponent } from './resume-view/resume-view.component';

const routes: Routes = [
  {
    path: 'project',
    loadChildren: () => import('./project/project-routing.module')
  },
  {
    path: 'course',
    loadChildren: () => import('./course/course-routing.module')
  },
  {
    path: 'industry',
    loadChildren: () => import('./industry/industry-routing.module')
  },
  {
    path: 'resume',
    pathMatch: 'full',
    component: ResumeViewComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export default routes;

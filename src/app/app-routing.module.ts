import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeViewComponent } from './resume-view/resume-view.component';

const routes: Routes = [
  {
    path: 'project',
    loadChildren: () => import('./project/project.module').then(m => m.ProjectModule)
  },
  {
    path: 'course',
    loadChildren: () => import('./course/course.module').then(m => m.CourseModule)
  },
  {
    path: 'industry',
    loadChildren: () => import('./industry/industry.module').then(m => m.IndustryModule)
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

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

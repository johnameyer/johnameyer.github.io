import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectItemComponent } from './project-item/project-item.component';

@NgModule({
  declarations: [
    ProjectsListComponent,
    ProjectViewComponent,
    ProjectItemComponent
  ],
  imports: [
    ProjectRoutingModule,
    CommonModule,
    NgbModule,
    FontAwesomeModule
  ]
})
export class ProjectModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndustryViewComponent } from './industry-view/industry-view.component';
import { IndustryItemComponent } from './industry-item/industry-item.component';
import { IndustryListComponent } from './industry-list/industry-list.component';
import { IndustryRoutingModule } from './industry-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CourseRoutingModule } from '../course/course-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [IndustryViewComponent, IndustryItemComponent, IndustryListComponent],
  imports: [
    CommonModule,
    IndustryRoutingModule,
    NgbModule,
    FontAwesomeModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class IndustryModule { }

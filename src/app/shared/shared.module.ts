import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologyBadgeComponent } from './technology-badge/technology-badge.component';



@NgModule({
  declarations: [TechnologyBadgeComponent],
  imports: [
    CommonModule
  ],
  exports: [TechnologyBadgeComponent]
})
export class SharedModule { }

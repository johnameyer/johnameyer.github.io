import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologyBadgeComponent } from './technology-badge/technology-badge.component';
import { LinkItemComponent } from './link-item/link-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TextSectionComponent } from './text-section/text-section.component';
import { TechnologyBadgeListComponent } from './technology-badge-list/technology-badge-list.component';
import { ProjectAttributeIconListComponent } from './project-attribute-icon-list/project-attribute-icon-list.component';
import { ScreenshotItemComponent } from './screenshot-item/screenshot-item.component';

@NgModule({
  declarations: [TechnologyBadgeComponent, LinkItemComponent, TextSectionComponent, TechnologyBadgeListComponent, ProjectAttributeIconListComponent, ScreenshotItemComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [TechnologyBadgeComponent, LinkItemComponent, TextSectionComponent, TechnologyBadgeListComponent, ProjectAttributeIconListComponent, ScreenshotItemComponent]
})
export class SharedModule { }

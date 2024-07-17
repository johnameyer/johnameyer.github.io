import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';
import { Attributes } from 'src/app/models/project';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { ViewComponent } from '../view/view.component';

@Component({
  selector: 'project-attribute-icon-list',
  templateUrl: './project-attribute-icon-list.component.html',
  styleUrls: ['./project-attribute-icon-list.component.scss'],
  standalone: true,
  imports: [FaIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectAttributeIconListComponent {
  attributes = input.required<Attributes>();

  constructor() {}

  getAwardsJoined(awards: any[]): string {
    return awards.map(award => award.award + ' (' + award.from + ')').join(' & ');
  }
}

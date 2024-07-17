import { Component, Input } from '@angular/core';
import { GenericLink } from 'src/app/models/link';
import { FaIconComponent, IconName, IconPrefix } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'link-item',
  templateUrl: './link-item.component.html',
  styleUrls: ['./link-item.component.scss'],
  standalone: true,
  imports: [FaIconComponent],
})
export class LinkItemComponent {
  @Input({ required: true }) link: GenericLink;

  constructor() {}

  getIcon = (type: IconName | [IconPrefix, IconName]): [IconPrefix, IconName] =>
    Array.isArray(type) ? type : ['fab', type];

  isString(x: any): x is string {
    return typeof x === 'string';
  }
}

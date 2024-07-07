import { Component, Input } from '@angular/core';
import { Link } from 'src/app/models/link';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { NgIf } from '@angular/common';

@Component({
    selector: 'link-item',
    templateUrl: './link-item.component.html',
    styleUrls: ['./link-item.component.scss'],
    standalone: true,
    imports: [NgIf, FaIconComponent]
})
export class LinkItemComponent {
  @Input({required: true}) link: Link;

  constructor() { }

  getIcon = (type: string | string[]): string[] => Array.isArray(type) ? type : ['fab', type];
}

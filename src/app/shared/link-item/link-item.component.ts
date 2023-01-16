import { Component, Input, OnInit } from '@angular/core';
import { Link } from 'src/app/models/link';

@Component({
  selector: 'link-item',
  templateUrl: './link-item.component.html',
  styleUrls: ['./link-item.component.scss']
})
export class LinkItemComponent {
  @Input() link: Link;

  constructor() { }

  getIcon = (type: string | string[]): string[] => Array.isArray(type) ? type : ['fab', type];
}

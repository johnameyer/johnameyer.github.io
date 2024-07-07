import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'text-section',
    templateUrl: './text-section.component.html',
    styleUrls: ['./text-section.component.scss'],
    standalone: true,
    imports: [NgIf]
})
export class TextSectionComponent {
  @Input({required: true}) title: String;
  @Input() text: String | undefined;

  constructor() { }

}

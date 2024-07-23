import { Component, Input } from '@angular/core';

@Component({
  selector: 'text-section',
  templateUrl: './text-section.component.html',
  styleUrls: ['./text-section.component.scss'],
  standalone: true,
  imports: [],
})
export class TextSectionComponent {
  @Input({ required: true }) title: String;
  @Input() text: String | undefined;

  constructor() {}
}

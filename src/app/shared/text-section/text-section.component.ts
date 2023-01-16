import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'text-section',
  templateUrl: './text-section.component.html',
  styleUrls: ['./text-section.component.scss']
})
export class TextSectionComponent {
  @Input() title: String;
  @Input() text: String | undefined;

  constructor() { }

}

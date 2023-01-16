import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'text-section',
  templateUrl: './text-section.component.html',
  styleUrls: ['./text-section.component.scss']
})
export class TextSectionComponent implements OnInit {
  @Input("title") title: String;
  @Input("text") text: String | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}

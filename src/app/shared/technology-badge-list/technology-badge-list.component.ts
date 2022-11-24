import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'technology-badge-list',
  templateUrl: './technology-badge-list.component.html',
  styleUrls: ['./technology-badge-list.component.scss']
})
export class TechnologyBadgeListComponent implements OnInit {
  @Input("technologies") technologies: String[];

  constructor() { }

  ngOnInit(): void {
  }

}

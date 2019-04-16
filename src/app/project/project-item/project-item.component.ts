import { Component, OnInit, Input } from '@angular/core';
import { projection } from '@angular/core/src/render3';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

  @Input() project;

  constructor() { }

  ngOnInit() {
  }

  getAwardsJoined(awards: any[]): string {
    return awards.map(award => award.award + ' (' + award.from + ')').join(' & ');
  }
}

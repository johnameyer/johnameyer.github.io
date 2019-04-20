import { Component, OnInit, Input } from '@angular/core';

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

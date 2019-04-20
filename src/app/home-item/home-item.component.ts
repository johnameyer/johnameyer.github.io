import { Component, OnInit, Input, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home-item',
  templateUrl: './home-item.component.html',
  styleUrls: ['./home-item.component.scss']
})
export class HomeItemComponent implements OnInit {

  @Input() project;

  constructor() { }

  ngOnInit() { }

  getAwardsJoined(awards: any[]): string {
    return awards.map(award => award.award + ' (' + award.from + ')').join(' & ');
  }

  getLink() {
    if (this.project.link){
      return this.project.link;
    }
    return '/project/' + this.project.slug;
  }

}

import { Component, OnInit, Input, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { CourseProject } from '../models/course-project';

@Component({
  selector: 'app-home-item',
  templateUrl: './home-item.component.html',
  styleUrls: ['./home-item.component.scss']
})
export class HomeItemComponent {

  @Input() project;

  constructor() { }

  getLink() {
    if (this.project.link){
      return this.project.link;
    }
    return '/project/' + this.project.slug;
  }

  renderDate() {
    if(this.project instanceof CourseProject) {
      if(this.project.duration) {
        return this.project.duration + ' - ' + this.project.semester[0] + ' ' + this.project.semester[1];
      } else {
        return this.project.semester[0] + ' ' + this.project.semester[1];
      }
    } else {
      if(this.project.startDate != this.project.endDate) {
        return this.project.startDate + ' - ' + this.project.endDate;
      } else {
        return this.project.startDate;
      }

    }
  }

}

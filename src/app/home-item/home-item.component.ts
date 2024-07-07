import { Component, Input } from '@angular/core';
import { CourseProject } from '../models/course-project';
import { StandaloneProject } from '../models/standalone-project';

@Component({
  selector: 'app-home-item',
  templateUrl: './home-item.component.html',
  styleUrls: ['./home-item.component.scss']
})
export class HomeItemComponent {

  @Input({required: true}) project: StandaloneProject | CourseProject & { link: String };

  constructor() { }

  getLink() {
    if ('link' in this.project){
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

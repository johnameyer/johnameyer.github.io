import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { projects } from '../projects';
import ColorUtil from '../../color-util';
import { StandaloneProject } from 'src/app/models/standalone-project';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {
  project$: Observable<StandaloneProject>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    ColorUtil.init();
    this.project$ = this.route.params.pipe(map(params => projects.find(project => params.slug === project.slug)));
  }

  getColor = (tech: string) => ColorUtil.getColor(tech);

}

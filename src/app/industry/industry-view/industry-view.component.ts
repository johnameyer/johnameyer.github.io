import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { IndustryPosition } from 'src/app/models/industry-project';
import { Project } from 'src/app/models/project';
import { projects } from 'src/app/project/projects';
import { industryPositions } from '../industry';

@Component({
  selector: 'app-industry-view',
  templateUrl: './industry-view.component.html',
  styleUrls: ['./industry-view.component.scss']
})
export class IndustryViewComponent implements OnInit {

  industryPosition$: Observable<IndustryPosition>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.industryPosition$ = this.route.params.pipe(map(params => industryPositions.find(position => params.slug === position.slug)));
  }

}

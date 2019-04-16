import { Component, ViewChild, ElementRef, AfterContentChecked } from '@angular/core';
import { projects } from '../projects';
import * as Masonry from 'masonry-layout';
import * as imagesLoaded from 'imagesloaded';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements AfterContentChecked {

  @ViewChild('grid') gridElem: ElementRef;
  projects = projects;
  grid: any;

  constructor() { }

  ngAfterContentChecked() {
    imagesLoaded(this.gridElem.nativeElement, () => {
      this.grid = new Masonry( this.gridElem.nativeElement, {
        itemSelector: '.grid-item',
        percentPosition: true
      });
    });
  }
}

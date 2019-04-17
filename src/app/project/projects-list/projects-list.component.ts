import { Component, ViewChild, ElementRef, AfterContentChecked, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { projects } from '../projects';
import * as Masonry from 'masonry-layout';
import * as imagesLoaded from 'imagesloaded';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements AfterViewInit, AfterViewChecked {

  @ViewChild('grid') gridElem: ElementRef;
  projects = projects;
  grid: any = null;

  constructor() { }

  ngAfterViewInit() {
    this.grid = new Masonry( this.gridElem.nativeElement, {
      itemSelector: '.grid-item',
      percentPosition: true
    });
  }

  ngAfterViewChecked() {
    imagesLoaded(this.gridElem.nativeElement, () => this.grid.layout());
  }
}

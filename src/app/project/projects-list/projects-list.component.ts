import { Component, ViewChild, ElementRef, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { projects } from '../projects';
import * as Masonry from 'masonry-layout';
import * as imagesLoaded from 'imagesloaded';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements AfterViewInit, AfterViewChecked, OnDestroy {

  @ViewChild('grid') gridElem: ElementRef;
  projects = projects;
  grid: any = null;
  loadListener: any;

  constructor() { }

  ngAfterViewInit() {
    this.grid = new Masonry( this.gridElem.nativeElement, {
      itemSelector: '.grid-item',
      percentPosition: true
    });
  }

  ngAfterViewChecked() {
    if (!this.loadListener) {
      this.loadListener = imagesLoaded(this.gridElem.nativeElement).on('progress', () => this.grid.layout());
    }
  }

  ngOnDestroy() {
    this.loadListener = null;
  }
}

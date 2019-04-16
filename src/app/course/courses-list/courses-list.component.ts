import { Component, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { courses } from '../courses';
import * as Masonry from 'masonry-layout';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements AfterViewChecked {

  @ViewChild('grid') gridElem: ElementRef;
  courses = courses;
  grid: any;

  constructor() { }

  ngAfterViewChecked() {
    this.grid = new Masonry( this.gridElem.nativeElement, {
      itemSelector: '.grid-item',
      percentPosition: true
    });
  }

}

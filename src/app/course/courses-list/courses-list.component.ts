import { Component, OnInit, AfterContentChecked, ViewChild, ElementRef } from '@angular/core';
import { courses } from '../courses';
import * as Masonry from 'masonry-layout';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements AfterContentChecked {

  @ViewChild('grid') gridElem: ElementRef;
  courses = courses;
  grid: any;

  constructor() { }

  ngAfterContentChecked() {
    this.grid = new Masonry( this.gridElem.nativeElement, {
      itemSelector: '.grid-item',
      percentPosition: true
    });
  }

}

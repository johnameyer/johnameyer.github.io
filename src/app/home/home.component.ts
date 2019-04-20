import { Component, ViewChild, AfterViewInit, AfterViewChecked, OnDestroy, ElementRef } from '@angular/core';
import { selected } from './home-selected';
import * as Masonry from 'masonry-layout';
import * as imagesLoaded from 'imagesloaded';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, AfterViewChecked, OnDestroy {

  selected = selected;
  loadListener: any;
  @ViewChild('grid') gridElem: ElementRef;
  grid: Masonry;

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

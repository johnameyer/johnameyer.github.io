import { NgClass } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnChanges,
  ViewChild,
  booleanAttribute,
  input,
  output,
  viewChild,
} from '@angular/core';
import { Attributes } from 'src/app/models/project';
import { ProjectAttributeIconListComponent } from '../project-attribute-icon-list/project-attribute-icon-list.component';
import { TechnologyBadgeComponent } from '../technology-badge/technology-badge.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'card',
  standalone: true,
  imports: [NgClass, ProjectAttributeIconListComponent, TechnologyBadgeComponent, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements AfterViewInit, OnChanges {
  title = input.required<string>();
  img = input<string>();
  attributes = input<Attributes>({});
  subtitle = input<string>();
  description = input<string>();
  link = input<string[] | string>();
  linkText = input('Read More');
  technologies = input<string[]>([]);
  truncate = input(false, { transform: booleanAttribute });

  onClamp = output<boolean>();

  isBodyClamped = false;

  body = viewChild<ElementRef<HTMLParagraphElement>>('body');

  constructor(private changeDetector: ChangeDetectorRef) {}

  @HostListener('window:keydown.enter', ['$event'])
  onClick() {
    this.checkForClamp();
  }

  ngOnChanges() {
    this.checkForClamp();
  }

  ngAfterViewInit(): void {
    this.checkForClamp();
  }

  checkForClamp() {
    if (this.truncate() && this.description()) {
      if (!this.body()) {
        return;
      }
      const shouldClamp = this.body().nativeElement.scrollHeight > this.body().nativeElement.clientHeight;
      if (shouldClamp != this.isBodyClamped) {
        // TODO can output also be a variable bound in template?
        this.isBodyClamped = shouldClamp;
        this.onClamp.emit(shouldClamp);
        this.changeDetector.detectChanges();
      }
    }
  }
}

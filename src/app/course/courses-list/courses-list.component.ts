import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewChecked,
  OnDestroy,
  AfterViewInit,
  ChangeDetectorRef,
  OnInit,
} from '@angular/core';
import { courses } from '../courses';
import Masonry from 'masonry-layout';
import { UntypedFormControl, ReactiveFormsModule } from '@angular/forms';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { Subject, BehaviorSubject } from 'rxjs';
import { Course } from 'src/app/models/course';
import { CourseItemComponent } from '../course-item/course-item.component';

import {
  NgbDropdown,
  NgbDropdownToggle,
  NgbDropdownMenu,
  NgbDropdownButtonItem,
  NgbDropdownItem,
} from '@ng-bootstrap/ng-bootstrap';

const dateOrdering = (a: Course, b: Course) =>
  a.semester && b.semester
    ? a.semester[1] == b.semester[1]
      ? a.semester[0] < b.semester[0]
      : a.semester[1] > b.semester[1]
    : 0;
const numberOrdering = (a: Course, b: Course) => (a.num && b.num ? a.num > b.num : 0);

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgbDropdown,
    NgbDropdownToggle,
    NgbDropdownMenu,
    NgbDropdownButtonItem,
    NgbDropdownItem,
    CourseItemComponent,
  ],
})
export class CoursesListComponent implements OnInit, AfterViewChecked, OnDestroy {
  @ViewChild('grid') gridElem: ElementRef;
  selectedCourses: Course[];
  grid: any;
  stop: Subject<any> = new Subject();
  ordering: BehaviorSubject<(a: Course, b: Course) => any> = new BehaviorSubject(
    (a: Course, b: Course) => -dateOrdering(a, b),
  );
  hasProjects = new UntypedFormControl(true);

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnInit() {
    this.updateItems();
    this.hasProjects.valueChanges
      .pipe(takeUntil(this.stop), distinctUntilChanged())
      .subscribe(() => this.updateItems());
  }

  ngOnDestroy() {
    this.stop.next({});
  }

  ngAfterViewChecked() {
    this.grid = new Masonry(this.gridElem.nativeElement, {
      itemSelector: '.grid-item',
      percentPosition: true,
    });
  }

  updateItems() {
    let selectedCourses = [...courses].filter(course => !course.hidden);
    if (this.hasProjects.value) {
      selectedCourses = selectedCourses.filter(course => course.projects?.length);
    }
    selectedCourses.sort(this.ordering.value);
    this.selectedCourses = selectedCourses;
    if (this.grid) {
      this.grid.layout();
    }
    this.changeDetector.markForCheck();
  }

  sort(field: string, direction: number) {
    let ordering: (a: Course, b: Course) => any;
    switch (field) {
      case 'number':
        ordering = numberOrdering;
        break;
      case 'date':
      default:
        ordering = dateOrdering;
    }
    if (Math.sign(direction) == -1) {
      this.ordering.next((a: Course, b: Course) => -ordering(a, b));
    } else {
      this.ordering.next(ordering);
    }
    this.updateItems();
  }
}

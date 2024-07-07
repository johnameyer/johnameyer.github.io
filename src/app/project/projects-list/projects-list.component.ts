import { Component, ViewChild, ElementRef, AfterViewInit, AfterViewChecked, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { projects } from '../projects';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import { Subject, BehaviorSubject, Observable, merge } from 'rxjs';
import { UntypedFormControl, ReactiveFormsModule } from '@angular/forms';
import { takeUntil, distinctUntilChanged, debounceTime, filter, map } from 'rxjs/operators';
import { Project } from 'src/app/models/project';
import { NgbTypeahead, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownButtonItem, NgbDropdownItem } from '@ng-bootstrap/ng-bootstrap';
import { StandaloneProject } from 'src/app/models/standalone-project';
import { ProjectItemComponent } from '../project-item/project-item.component';


const dateOrdering = (a: StandaloneProject, b: StandaloneProject) => a.endDate == 'Current' ? 1 : b.endDate == 'Current' ? -1 : new Date(a.endDate).valueOf() - new Date(b.endDate).valueOf();

function getTechnologies(projects: Project[]): string[] {
  const technologies = {};
  for(let project of projects) {
    for(let technology of project.technologies || []) {
      technologies[technology] = 1 + (technologies[technology] || 0);
    }
  }
  return Object.keys(technologies).sort((one, two) => technologies[two] - technologies[one]);
}

@Component({
    selector: 'app-projects-list',
    templateUrl: './projects-list.component.html',
    styleUrls: ['./projects-list.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, NgbTypeahead, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownButtonItem, NgbDropdownItem, ProjectItemComponent]
})
export class ProjectsListComponent implements OnInit, AfterViewChecked, OnDestroy {

  @ViewChild('grid') gridElem: ElementRef;
  selectedProjects: Project[] = [];
  grid: Masonry = null;
  loadListener: any;
  stop$: Subject<any> = new Subject();
  ordering$: BehaviorSubject<(a: Project, b: Project) => any> = new BehaviorSubject((a: StandaloneProject, b: StandaloneProject) => -dateOrdering(a,b));
  technologies: string[];
  selectedTechnology = new UntypedFormControl('');

  @ViewChild('instance', {static: true}) instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  constructor(private changeDetector: ChangeDetectorRef) {
    this.technologies = getTechnologies(projects);
  }

  ngOnInit() {
    this.updateItems();
    this.selectedTechnology.valueChanges.pipe(takeUntil(this.stop$), distinctUntilChanged()).subscribe(() => this.updateItems());
  }

  ngAfterViewChecked() {
    this.grid = new Masonry( this.gridElem.nativeElement, {
      itemSelector: '.grid-item',
      percentPosition: true
    });
    if (!this.loadListener) {
      this.loadListener = imagesLoaded(this.gridElem.nativeElement).on('progress', () => this.grid.layout());
    }
  }

  ngOnDestroy() {
    this.loadListener = null;
    this.stop$.next({});
  }

  updateItems() {
    let selectedProjects = [...projects];
    if(this.selectedTechnology.value != '' && this.technologies.includes(this.selectedTechnology.value)) {
      selectedProjects = selectedProjects.filter(project => project.technologies?.includes(this.selectedTechnology.value));
    }
    selectedProjects.sort(this.ordering$.value);
    this.selectedProjects = selectedProjects;
    if(this.grid) {
      this.grid.layout();
    }
    this.changeDetector.markForCheck();
  }

  sort(field: string, direction: number) {
    let ordering: (a: Project, b: Project) => any;
    switch(field) {
      case 'date':
      default:
        ordering = dateOrdering;
    }
    if(Math.sign(direction) == -1) {
      this.ordering$.next((a: Project, b: Project) => -ordering(a,b));
    } else {
      this.ordering$.next(ordering);
    }
    this.updateItems();
  }

  search = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === '' ? this.technologies : this.technologies.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );
  }
}

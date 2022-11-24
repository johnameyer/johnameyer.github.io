import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAttributeIconListComponent } from './project-attribute-icon-list.component';

describe('ProjectAttributeIconListComponent', () => {
  let component: ProjectAttributeIconListComponent;
  let fixture: ComponentFixture<ProjectAttributeIconListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectAttributeIconListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectAttributeIconListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

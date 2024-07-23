import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryViewComponent } from './industry-view.component';

describe('IndustryViewComponent', () => {
  let component: IndustryViewComponent;
  let fixture: ComponentFixture<IndustryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IndustryViewComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TechnologyBadgeComponent } from './technology-badge.component';

describe('TechnologyBadgeComponent', () => {
  let component: TechnologyBadgeComponent;
  let fixture: ComponentFixture<TechnologyBadgeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [TechnologyBadgeComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyBadgeListComponent } from './technology-badge-list.component';

describe('TechnologyBadgeListComponent', () => {
  let component: TechnologyBadgeListComponent;
  let fixture: ComponentFixture<TechnologyBadgeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [TechnologyBadgeListComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(TechnologyBadgeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

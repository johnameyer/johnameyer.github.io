import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { IndustryPosition } from 'src/app/models/industry-position';
import { ViewComponent } from '../../shared/view/view.component';
import { DetailViewComponent } from 'src/app/shared/detail-view/detail-view.component';

@Component({
  selector: 'app-industry-view',
  templateUrl: './industry-view.component.html',
  standalone: true,
  imports: [DetailViewComponent, ViewComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndustryViewComponent {
  industryPosition = input.required<IndustryPosition>();

  title = computed(() => `${this.industryPosition().title} @ ${this.industryPosition().company}`);

  subtitle = computed(() => `${this.industryPosition().startDate} - ${this.industryPosition().endDate || 'Current'}`);
}

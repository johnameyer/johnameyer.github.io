import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { StandaloneProject } from 'src/app/models/standalone-project';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  standalone: true,
  imports: [CardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectItemComponent {
  project = input.required<StandaloneProject>();

  constructor() {}

  subtitle = computed(() => `${this.project().startDate} - ${this.project().endDate || 'Current'}`);
}

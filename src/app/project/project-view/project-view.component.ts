import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ViewComponent } from '../../shared/view/view.component';
import { StandaloneProject } from 'src/app/models/standalone-project';
import { DetailViewComponent } from 'src/app/shared/detail-view/detail-view.component';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss'],
  standalone: true,
  imports: [ViewComponent, DetailViewComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectViewComponent {
  project = input.required<StandaloneProject>();

  subtitle = computed(() => `${this.project().startDate} - ${this.project().endDate || 'Current'}`);
}

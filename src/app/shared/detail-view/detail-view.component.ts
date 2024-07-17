import { Component, input } from '@angular/core';

// TODO rename
@Component({
  selector: 'detail-view',
  standalone: true,
  imports: [],
  templateUrl: './detail-view.component.html',
  styleUrl: './detail-view.component.scss',
})
export class DetailViewComponent {
  title = input.required<string>();
  subtitle = input.required<string>();
}

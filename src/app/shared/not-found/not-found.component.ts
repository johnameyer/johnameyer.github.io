import { Component, input } from '@angular/core';

@Component({
  selector: 'not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  message = input<string>();
}

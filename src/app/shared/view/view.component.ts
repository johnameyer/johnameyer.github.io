import { ChangeDetectionStrategy, Component, booleanAttribute, input } from '@angular/core';
import { TextSectionComponent } from '../text-section/text-section.component';
import { TechnologyBadgeListComponent } from '../technology-badge-list/technology-badge-list.component';
import { Image } from 'src/app/models/image';
import { GenericLink, Link } from 'src/app/models/link';
import { Award } from 'src/app/models/award';
import { LinkItemComponent } from '../link-item/link-item.component';
import { ScreenshotItemComponent } from '../screenshot-item/screenshot-item.component';

// TODO rename
@Component({
  selector: 'app-view',
  standalone: true,
  imports: [TextSectionComponent, TechnologyBadgeListComponent, LinkItemComponent, ScreenshotItemComponent],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewComponent {
  description = input<string>();
  imgs = input<Image[]>([]);
  links = input<GenericLink[]>([]);
  awards = input<Award[]>([]);

  // TODO merge
  outcomes = input<string>();
  challenge = input<string>();
  future = input<string>();

  technologies = input<string[]>([]);

  flush = input(false, { transform: booleanAttribute });
}

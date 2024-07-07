import { Component, OnInit, Input } from '@angular/core';
import ColorUtil from 'src/app/color-util';

const luminanceRGB = [21, 71, 7];

@Component({
  selector: 'app-technology-badge',
  templateUrl: './technology-badge.component.html',
  styleUrls: ['./technology-badge.component.scss']
})
export class TechnologyBadgeComponent implements OnInit {
  @Input({required: true}) tech: String;

  ngOnInit(): void {
    ColorUtil.init();
  }

  getBackgroundColor = (tech: string) => ColorUtil.getColor(tech);
  
  // Quick and dirty heuristic for determining whether to use white or gray text for background
  getTextColor = (tech: string) => (
    Array.from<string>(ColorUtil.getColor(tech).substring(1))
      .filter((_, i) => !(i % 2))
      .map(n => parseInt(n, 16) + 1)
      .map((n, i) => n * luminanceRGB[i])
      .reduce((a, b) => a + b, 0)
    ) > 700 ? '#222' : '#EEE';
}

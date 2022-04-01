import { Component, OnInit, Input } from '@angular/core';
import ColorUtil from 'src/app/color-util';

@Component({
  selector: 'app-technology-badge',
  templateUrl: './technology-badge.component.html',
  styleUrls: ['./technology-badge.component.sass']
})
export class TechnologyBadgeComponent implements OnInit {
  @Input('tech') tech;

  ngOnInit(): void {
    ColorUtil.init();
  }

  getBackgroundColor = (tech: string) => ColorUtil.getColor(tech);
  
  getTextColor = (tech: string) => (
    Array.from<string>(ColorUtil.getColor(tech).substring(1))
      .filter((_, i) => i % 2)
      .map(n => parseInt(n, 16))
      .reduce((a, b) => a + b, 0)
    ) > 10 ? '#222' : '#FFF';
}

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

  getColor = (tech: string) => ColorUtil.getColor(tech);

}

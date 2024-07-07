import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGithub, faYoutube, faChrome } from '@fortawesome/free-brands-svg-icons';
import { faAward, faLightbulb, faFlask, faBlog } from '@fortawesome/free-solid-svg-icons';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterLink, NgbCollapse, RouterLinkActive, RouterOutlet]
})
export class AppComponent {
  isCollapsed = true;

  constructor(private router: Router, iconLibrary: FaIconLibrary) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (window as any).gtag('event', 'page_view', {page_path: event.urlAfterRedirects});
      }
    });

    // Add an icon to the library for convenient access in other components
    iconLibrary.addIcons(faAward, faLightbulb, faFlask, faBlog, faGithub, faYoutube, faChrome);
  }
}

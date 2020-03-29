import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAward, faLightbulb, faFlask } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faYoutube, faChrome } from '@fortawesome/free-brands-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { ResumeViewComponent } from './resume-view/resume-view.component';
import { HomeItemComponent } from './home-item/home-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResumeViewComponent,
    HomeItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faAward, faLightbulb, faFlask, faGithub, faYoutube, faChrome);
  }
}

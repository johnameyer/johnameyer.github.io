import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { library } from '@fortawesome/fontawesome-svg-core';
import { faAward, faLightbulb, faFlask } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faYoutube, faChrome } from '@fortawesome/free-brands-svg-icons';
import { HomeComponent } from './home/home.component';
import { ResumeViewComponent } from './resume-view/resume-view.component';
import { ProjectItemComponent } from './project/project-item/project-item.component';
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
    NgbModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(faAward, faLightbulb, faFlask, faGithub, faYoutube, faChrome);
  }
}

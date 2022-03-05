import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material/material.module';
import { CourseComponent } from './pages/course/course.component';

import {HttpClientModule} from '@angular/common/http';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {InMemoryCache} from '@apollo/client/core';
import { AvatarModule } from 'ngx-avatar';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { IconCardComponent } from './shared/components/icon-card/icon-card.component';
import { ActivityCardComponent } from './shared/components/activity-card/activity-card.component';
import { PostCardComponent } from './shared/components/post-card/post-card.component';
import { environment } from 'src/environments/environment';
import { ResultsComponent } from './pages/results/results.component';
import { ResultCardComponent } from './shared/components/result-card/result-card.component';
import { SkillCardComponent } from './shared/components/skill-card/skill-card.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    ActivitiesComponent,
    IconCardComponent,
    ActivityCardComponent,
    PostCardComponent,
    ResultsComponent,
    ResultCardComponent,
    SkillCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    LayoutModule,
    MaterialModule,
    ApolloModule,
    HttpClientModule,
    AvatarModule,
    RoundProgressModule,
    MatProgressBarModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: environment.api,
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

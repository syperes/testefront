import {Injectable} from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import {Apollo, ApolloBase, gql} from 'apollo-angular';
import { Observable } from 'rxjs';
import { CourseActivitiesContainer, CourseContainer, COURSERESULTS, CourseResultsContainer, COURSESACTIVITIES, COURSESHEADER } from 'src/app/shared/models';



@Injectable({
  providedIn: `root`,
})
export class CourseService {
  constructor(private apolloProvider: Apollo) {}

  getCourse(): Observable<ApolloQueryResult<CourseContainer>> {
    return this.apolloProvider.watchQuery<CourseContainer>({
      query: COURSESHEADER
    }).valueChanges;
  }

  getCourseActivities(): Observable<ApolloQueryResult<CourseActivitiesContainer>> {
    return this.apolloProvider.watchQuery<CourseActivitiesContainer>({
      query: COURSESACTIVITIES
    }).valueChanges;
  }

  getCourseResults(): Observable<ApolloQueryResult<CourseResultsContainer>> {
    return this.apolloProvider.watchQuery<CourseResultsContainer>({
      query: COURSERESULTS
    }).valueChanges;
  }

}
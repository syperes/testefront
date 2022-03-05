import {Injectable} from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import {Apollo, ApolloBase, gql} from 'apollo-angular';
import { Observable } from 'rxjs';
import { CourseContainer, LoggedUserContainer, USER } from 'src/app/shared/models';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apolloProvider: Apollo) {}

  getLoggedUser(): Observable<ApolloQueryResult<LoggedUserContainer>> {
    return this.apolloProvider.watchQuery<LoggedUserContainer>({
      query: USER
    }).valueChanges;
  }
}

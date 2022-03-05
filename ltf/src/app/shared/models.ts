import { gql } from "apollo-angular";

export interface Participant {
  first_name: string;
  last_name: string;
}

export interface Activity {
  id: number;
  tag: string;
  title: string;
  status: string;
  time: number;
  image: string;
}

export interface RelatedPost {
  title: string;
  subtitle: string;
  image: string;
  icon: string;
}

export interface CourseHeader {
  name: string;
  progress: number;
  participants: Participant[];
}

export interface CourseActivities {
  topics: Topic[];
  activities: Activity[];
  related_posts: RelatedPost[];
}

export interface CourseResults {
    name: string;
    score: number;
    scoreTotal: number;
    title: string;
    description: string;
    skills: Skill[];
    developmentSkills: DevelopmentSkill[];
    topics: Topic[];
}

export interface CourseContainer {
  course: CourseHeader;
}

export interface CourseActivitiesContainer {
  course: CourseActivities;
}

export interface CourseResultsContainer {
  course: CourseResults;
}

export interface LoggedUser {
  first_name: string;
}

export interface LoggedUserContainer {
  loggedUser: LoggedUser;
}

  export interface Skill {
      name: string;
      description: string;
      level: number;
  }

  export interface DevelopmentSkill {
      name: string;
      description: string;
      level: number;
  }

  export interface Topic {
      icon: string;
      name: string;
      score: number;
      scoreDescription: string;
      text: string;
  }

export const USER = gql`
  query LoggedUser {
    loggedUser {
      first_name
    }
  }
`;

export const COURSESHEADER = gql`query Query {
    course {
      name
      progress
      participants {
        first_name
        last_name
      }
    }
  }
`;

export const COURSESACTIVITIES = gql`query Query {
    course {
      topics {
        icon
        name
      }
      activities {
        id
        tag
        title
        status
        time
        image
      }
      related_posts {
        title
        subtitle
        image
        icon
      }
    }
  }
`;

export const COURSERESULTS = gql`query Query {
    course {
      name
      score
      scoreTotal
      title
      description
      skills {
        name
        description
        level
      }
      developmentSkills {
        name
        description
        level
      }
      topics {
        icon
        name
        score
        scoreDescription
        text
      }
    }
}`

import { Component, OnInit } from '@angular/core';
import { Activity, RelatedPost, Topic } from 'src/app/shared/models';
import { CourseService } from '../course/course.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  iconCards: Topic[] = [];
  completeActivityCards: Activity[] = [];
  remainingActivityCards: Activity[] = [];
  postCards: RelatedPost[] = [];

  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.getCourseActivities();
  }

  getCourseActivities() {
    this.courseService.getCourseActivities().subscribe((data) => {
      this.iconCards = data.data.course.topics;
      this.completeActivityCards = data.data.course.activities.filter(activity => activity.status === 'complete');
      this.remainingActivityCards = data.data.course.activities.filter(activity => activity.status !== 'complete');
      this.postCards = data.data.course.related_posts;
      console.log(this.postCards)
    })
  }
}

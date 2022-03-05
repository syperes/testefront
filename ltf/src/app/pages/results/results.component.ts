import { Component, OnInit } from '@angular/core';
import { Skill, Topic } from 'src/app/shared/models';
import { CourseService } from '../course/course.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  name = '';
  score = 0;
  scoreTotal = 0;
  progress = 0;
  title1 = '';
  title2 = '';
  text = '';
  skillCards: Skill[] = [];
  devCards: Skill[] = [];
  iconCards: Topic[] = [];
  grade = 0;
  gradeDescription: string | null = '';
  gradeText = '';
  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.getCourseActivities();
  }

  getCourseActivities() {
    this.courseService.getCourseResults().subscribe((data) => {
      let course = data.data.course;
      this.name = course.name;
      this.score = course.score;
      this.scoreTotal = course.scoreTotal;
      this.progress = (course.score/course.scoreTotal)*100;
      let title = course.title.split('+');
      this.title1 = title[0];
      this.title2 = title[1];
      this.text = course.description;
      this.skillCards = course.skills;
      this.devCards = course.developmentSkills;
      this.iconCards = course.topics;
      this.grade = course.topics[0].score;
      this.gradeDescription = course.topics[0].scoreDescription;
      this.gradeText = course.topics[0].text;
    })
  }
}

import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Participant } from 'src/app/shared/models';
import { CourseService } from './course.service';

@Component({
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit, AfterViewInit {
  title = '';
  participants: any[] = [];
  max = 100;
  current = 0;
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    // this.getCourse();
  }

  ngAfterViewInit(): void {
      this.getCourse();
  }

  getCourse() {
    this.courseService.getCourse().subscribe((data) => {
      this.title = data.data.course.name;
      this.participants = data.data.course.participants.map(user => { return {name: `${user.first_name} ${user.last_name}`}});
      this.current = data.data.course.progress;
    })
  }

}

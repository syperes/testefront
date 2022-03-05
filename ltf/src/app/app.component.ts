import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ltf';
  mobile = false;
  showFiller = false;
  helloMessage= `Olá, :)`;

  constructor(
    private userService: UserService
  ){}

  ngOnInit(): void {
    if (window.screen.width < 768) { // 768px portrait
      this.mobile = true;
    }
    this.getCourse();
  }

  getCourse() {
    this.userService.getLoggedUser().subscribe(
      (data) => {this.helloMessage = `Olá, ${data.data.loggedUser.first_name} :)`}
    )
  }
}

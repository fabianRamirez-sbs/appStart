import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;
  constructor(public userService: UsersService, public router: Router) {}
  login() {
    const user = { email: this.email, password: this.password };
    this.userService.login(user).subscribe(
      (data) => {
        this.userService.setToken(data.token);
        this.router.navigateByUrl('/');
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {}
}

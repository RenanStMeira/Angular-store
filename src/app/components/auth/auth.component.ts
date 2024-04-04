import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from 'api/users.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  constructor(private usersService: UsersService) { }

  onSubmit(form: NgForm) {
      if (form.valid) {
          const { username, password } = form.value;
          this.usersService.login(username, password).subscribe(
              response => {
                localStorage.setItem('token', response.token);
              },
              error => {
                  console.error(error, "Username ou senha incorretos")
              }
          );
      }
  }
}

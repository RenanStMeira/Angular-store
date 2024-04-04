import { NgForm } from '@angular/forms';
import { UsersService } from './../../../api/users.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  constructor(private UsersService: UsersService) { }

  onSubmit(form: NgForm) {
    this.UsersService.postCreateUser(form.value).subscribe(response => {
      form.reset();
    })
  }
}

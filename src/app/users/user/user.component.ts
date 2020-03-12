import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { NgForm, FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User;

  userForm: FormGroup;

  isEdit = false;

  constructor(private usersService: UsersService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const userId = paramMap.get('id');
      this.user = null;
      this.usersService.getUser(userId).subscribe(users => {
        this.isEdit = false;
        this.user = users[0];
        console.log(this.user);
        // this.userForm.get('name').setValue(this.user.name);
      });
    });

    this.createUserForm();
  }

  createUserForm() {
    this.userForm = new FormGroup({
      name: new FormControl('', { validators: [Validators.required, this.forbiddenName] }),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  onEditClick() {
    this.isEdit = true;
    this.userForm.patchValue(this.user);
  }

  onSubmit() {
    this.user = this.userForm.value;
    this.isEdit = false;
  }

  forbiddenName(control: FormControl): ValidationErrors {
    if (control.value === 'kartik') {
      return { forbiddenName: true };
    }
    return null;
  }
}

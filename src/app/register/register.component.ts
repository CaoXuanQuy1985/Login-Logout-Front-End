/*import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth.service';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

function comparePassword(c: AbstractControl): any {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {
    passwordnotmatch: true
  };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  isSubmitted = false;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      pwGroup: this.fb.group({
        password: ['', [Validators.minLength(6)]],
        confirmPassword: ''
      }, {validator: comparePassword}),
      email: ['', [Validators.required, Validators.email]],
    });
  }
  public get username(): AbstractControl {
    return this.registerForm.get('username');
  }
  public get email(): AbstractControl {
    return this.registerForm.get('email');
  }
  public get password(): AbstractControl {
    return this.registerForm.get('password');
  }
  onSubmit(): boolean {
    this.isSubmitted = true;
    if (!this.registerForm.valid) {
  /!*    this.authService.register(this.registerForm).subscribe(
        data => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        },
        err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
      return true;*!/
    }
    else {
      this.authService.register(this.registerForm).subscribe(
        data => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        },
        err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
      return true;
    }
  }
}*/

import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}


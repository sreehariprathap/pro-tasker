import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    public authService: AuthenticationService,
    private fb: FormBuilder,
    private readonly toast: HotToastService
  ) {
    this.initLoginForm();
  }

  ngOnInit(): void {}

  initLoginForm() {
    this.loginForm = this.fb.group({
      email: [
        '',
        Validators.required,
      ],
      password: ['', Validators.required],
    });
  }

  login() {
    console.log(this.loginForm.value);
    this.authService.SignIn(
      this.loginForm.value.email,
      this.loginForm.value.password
    );
    this.loginForm.reset();
  }
}

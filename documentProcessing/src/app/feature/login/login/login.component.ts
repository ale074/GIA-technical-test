import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../shared/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  dataLoginForm: FormGroup;

  constructor(
    private readonly router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
  ) {}

  ngOnInit(): void {
    this.dataLoginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    });
    const token = localStorage.getItem('token');
    if(token) {
      this.redirectUsers();
    }
  }

  async login() {
    const email = this.dataLoginForm.controls.email.value;
    const password = this.dataLoginForm.controls.password.value;
    const result = await this.loginService.login(email, password) as {token: string, id: string};
    if(result.token) {
      localStorage.setItem('token',result.token);
      sessionStorage.setItem('uid', result.id);
      this.redirectUsers();
    }
  }


  public redirectUsers(): void {
    this.router.navigateByUrl('/users');
  }


}

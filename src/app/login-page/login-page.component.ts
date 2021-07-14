import { Component, OnInit } from '@angular/core';
//import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onSubmit() {
    // console.log(this.loginForm.value);

    if (
      this.loginForm.value.username == 'Asmi' &&
      this.loginForm.value.password == 'patil'
    ) {
      console.log('Login');

      this.router.navigate(['admin']);
    } else {
      alert('Enter Valid ID & Password');
    }
  }
}

import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/auth.service";

@Component({
  templateUrl: "./signin.component.html"
})
export class SignInComponent implements OnInit {

  /*@ViewChild('userNameInput')*/userNameInput: ElementRef<HTMLInputElement>;
  loginForm: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private autheService: AuthService,
    private router: Router,
    ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['',
       Validators.required],
      password: ['',
       Validators.required]
    });
  }

  login() {

    const userName = this.loginForm.get('userName').value
    const password = this.loginForm.get('password').value

    this.autheService.authenticate(userName, password)
    .subscribe(() => this.router.navigate(['user', userName]),
    err => {
      console.log(err);
      this.loginForm.reset();
      this.userNameInput.nativeElement.focus();
      alert('Invalid user name is password')
    })
  }
}

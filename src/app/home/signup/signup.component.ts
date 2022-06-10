import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { NewUser } from "./new-user";
import { SignupService } from "./signup.service";
import { UserNotTakeValidatorsService } from "./user-not-take-validators.service";

@Component({
  templateUrl:'./signup.component.html',
  providers: [UserNotTakeValidatorsService]
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakeValidatorsService: UserNotTakeValidatorsService,
    private signupSrvice: SignupService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['',
      [
        Validators.required,
        Validators.email
      ]],
      fullName: ['',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(40)
      ]],
      userName: ['',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern(/^[a-z0-9_\-]+$/),
        Validators.maxLength(30)
      ],
      this.userNotTakeValidatorsService.checkUserNameTaken()
    ],
      password: ['',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(14)
      ]],
    })
  }

  signup() {
    const newUser = this.signupForm.getRawValue() as NewUser;
    this.signupSrvice
    .signup(newUser)
    .subscribe(() => this.router.navigate(['']),
    err => console.log(err)
    );
  }

}

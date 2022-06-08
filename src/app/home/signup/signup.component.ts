import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserNotTakeValidatorsService } from "./user-not-take-validators.service";

@Component({
  templateUrl:'./signup.component.html'
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakeValidatorsService: UserNotTakeValidatorsService
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
}

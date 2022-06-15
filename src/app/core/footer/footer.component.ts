import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { UserModel } from "src/app/shared/interfaces/userModel";
import { UserService } from "../user.service";

@Component ({
  selector:'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit{

  user$: Observable<UserModel>
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user$ = this.userService.getUser();
  }

}

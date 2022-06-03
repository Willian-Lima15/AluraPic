import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { UserModel } from "src/app/shared/interfaces/userModel";
import { UserService } from "../user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  user$: Observable<UserModel>;
  user: UserModel;

  constructor(private userService: UserService) {
    this.user$ = userService.getUser();
    this.user$.subscribe(user => this.user = user)
  }
}

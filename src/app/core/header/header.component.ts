import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { UserModel } from "src/app/shared/interfaces/userModel";
import { UserService } from "../user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  user$: Observable<UserModel>;

  constructor(
    private userService: UserService,
    private router: Router
    ) {

    this.user$ = userService.getUser();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }
}

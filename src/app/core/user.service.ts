import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import * as jtw_decode from 'jwt-decode';
import { UserModel } from '../shared/interfaces/userModel';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<UserModel>(null);

  constructor(private tokenService: TokenService) {
    this.tokenService.hasToken() &&
      this.decodeAndNotify();
   }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  decodeAndNotify() {
    const token = this.tokenService.getToken();
    const userModel = jtw_decode(token) as UserModel;
    this.userSubject.next(userModel);
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }
}

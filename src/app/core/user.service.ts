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
  private userName: string;

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

  getUserName() {
    return this.userName;
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    const user = jtw_decode(token) as UserModel;
    this.userName = user.name;
    this.userSubject.next(user);
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  isLogged() {
    return this.tokenService.hasToken();
  }
}

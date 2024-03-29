import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { SignupService } from './signup.service';

import { debounceTime, switchMap, map, first } from 'rxjs/operators';

@Injectable()
export class UserNotTakeValidatorsService {

  constructor(private signupService: SignupService) { }

  checkUserNameTaken() {

    return (control: AbstractControl) => {
        return control
            .valueChanges
            .pipe(debounceTime(300))
            .pipe(switchMap(userName =>
                    this.signupService.checkUserNameTaken(userName)
            ))
            .pipe(map(isTaken => isTaken ? { userNameTaken: true } : null))
            .pipe(first());
    }
}
}

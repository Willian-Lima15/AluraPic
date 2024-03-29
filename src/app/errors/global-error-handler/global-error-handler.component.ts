import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Component, ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { ServerLogService } from 'src/app/core/server-log-.service';
import { UserService } from 'src/app/core/user.service';
import { environment } from 'src/environments/environment';
import * as StackTrace from "stacktrace-js";

@Component({
  selector: 'app-global-error-handler',
  templateUrl: './global-error-handler.component.html',
  styleUrls: ['./global-error-handler.component.css']
})
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(
    private injector: Injector,
    private userService: UserService
  ) { }

  handleError(error: any): void {
    console.log('passei pelo handler');

    const location = this.injector.get(LocationStrategy);
    const userService = this.injector.get(UserService);
    const serverLogService = this.injector.get(ServerLogService)
    const router = this.injector.get(Router)

    const url = location instanceof PathLocationStrategy
        ? location.path() : '';

    const message = error.message
      ? error.message : error.toString();

      router.navigate(['/error']);

    StackTrace
        .fromError(error)
        .then(stackFrames => {
            const stackAsString = stackFrames
                .map(sf => sf.toString())
                .join('\n')

                if(environment.production) router.navigate(['/error']);

                console.log(message);
                console.log(stackAsString);
                console.log('o que será enviado para o servidor');
                serverLogService.log({ message, url, userName: userService.getUserName(), stack: stackAsString})
                  .subscribe(() => console.log('Error logged on server'),
                  err => {
                      console.log(err);
                      console.log('Fail to send error log to server');
                  });
        });
}
}

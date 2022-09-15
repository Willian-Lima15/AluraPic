import { Component, ErrorHandler } from '@angular/core';

@Component({
  selector: 'app-global-error-handler',
  templateUrl: './global-error-handler.component.html',
  styleUrls: ['./global-error-handler.component.css']
})
export class GlobalErrorHandler implements ErrorHandler {

  handleError(error: any): void {
      throw new Error("Method not implemented");
  }
}

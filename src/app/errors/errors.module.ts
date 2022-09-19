import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { GlobalErrorHandler } from './global-error-handler/global-error-handler.component';
import { GlobalErrorComponent } from './global-error-handler/global-error/global-error.component';




@NgModule({
  declarations: [
    NotFoundComponent,
    GlobalErrorComponent
],
  imports: [
    CommonModule
  ],
  providers: [
    {
    provide: ErrorHandler,
    useClass: GlobalErrorHandler
    }
  ]
})
export class ErrorsModule { }

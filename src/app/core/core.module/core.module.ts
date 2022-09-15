import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AlertModule } from "src/app/shared/components/alert/alert.module";
import { LoadingModule } from "src/app/shared/components/loading/loading.module";
import { MenuModule } from "src/app/shared/components/menu/menu.module";
import { showIfLoggedModule } from "src/app/shared/directive/show-if-logged/show-if-logged.module";
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { RequestInterceptor } from "../request.interceptor";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
     RouterModule,
     AlertModule,
     LoadingModule,
     MenuModule,
     showIfLoggedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }]
})
export class CoreModule {

}

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { showIfLoggedDirective } from "./show-if-logged.directive";

@NgModule({
  declarations: [showIfLoggedDirective],
  exports: [showIfLoggedDirective],
  imports:[CommonModule]
})

export class showIfLoggedModule {}

import { NgModule } from "@angular/core";
import { DarkOnHoverDirective } from "./dark-on-hover.directive";
import { ShowIfLoggedDirective } from '.c:/Users/Willian Lima/Documents/Alura/Angular/AluraPic/src/app/shared/directive/show-if-logged.directive';

@NgModule({
  declarations: [	 DarkOnHoverDirective,
      ShowIfLoggedDirective
   ],
  exports: [ DarkOnHoverDirective]
})
export class DarkOnHoverModule {}

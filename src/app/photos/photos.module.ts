import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PhotoFormModule } from "./photo-form/photo-form/photo-form.module";

import { PhotoListModule } from "./photo-list/photo-list.module.module";


@NgModule({
  declarations: [],
  imports: [
    PhotosModule,
    PhotoFormModule,
    PhotoListModule,
    CommonModule
    ],
    exports: []
})
export class PhotosModule {}

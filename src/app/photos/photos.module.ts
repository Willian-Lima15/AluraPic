import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PhotoDetailsModule } from "./photo-detail/photo-details/photo-details.module";
import { PhotoFormModule } from "./photo-form/photo-form/photo-form.module";

import { PhotoListModule } from "./photo-list/photo-list.module";
import { PhotoModule } from "./photo/photo/photo.module";



@NgModule({
  declarations: [],
  imports: [
    PhotoModule,
    PhotoFormModule,
    PhotoListModule,
    PhotoDetailsModule,
    CommonModule
    ],
    exports: []
})
export class PhotosModule {}

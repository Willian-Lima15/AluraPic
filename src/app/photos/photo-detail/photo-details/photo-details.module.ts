import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoDetailsComponent } from '../photo-details.component';
import { PhotoModule } from '../../photo/photo/photo.module';
import { PhotoCommentComponent } from '../photo-comments/photo-comment.component';



@NgModule({
  declarations: [PhotoDetailsComponent, PhotoCommentComponent],
  exports: [PhotoDetailsComponent,PhotoCommentComponent],
  imports: [
    CommonModule,
    PhotoModule
  ]
})
export class PhotoDetailsModule { }

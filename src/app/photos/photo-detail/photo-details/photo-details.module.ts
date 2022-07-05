import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoDetailsComponent } from '../photo-details.component';
import { PhotoModule } from '../../photo/photo/photo.module';
import { PhotoCommentComponent } from '../photo-comments/photo-comment.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from 'src/app/shared/components/vmessage/vmessage.module';



@NgModule({
  declarations: [PhotoDetailsComponent, PhotoCommentComponent],
  exports: [PhotoDetailsComponent,PhotoCommentComponent],
  imports: [
    CommonModule,
    PhotoModule,
    RouterModule,
    ReactiveFormsModule,
    VmessageModule
  ]
})
export class PhotoDetailsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoDetailsComponent } from '../photo-details.component';
import { PhotoModule } from '../../photo/photo/photo.module';
import { PhotoCommentComponent } from '../photo-comments/photo-comment.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { PhotoOwnerOnlyDirective } from '../photo-owner-only/photo-owner-only.directive';
import { showIfLoggedModule } from 'src/app/shared/directive/show-if-logged/show-if-logged.module';



@NgModule({
  declarations: [PhotoDetailsComponent, PhotoCommentComponent,
    PhotoOwnerOnlyDirective
  ],
  exports: [PhotoDetailsComponent,PhotoCommentComponent],
  imports: [
    CommonModule,
    PhotoModule,
    RouterModule,
    ReactiveFormsModule,
    VmessageModule,
    showIfLoggedModule
  ]
})
export class PhotoDetailsModule { }

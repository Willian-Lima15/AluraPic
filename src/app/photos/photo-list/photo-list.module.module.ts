import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './photo-list.component';
import { PhotoComponent } from '../photo/photo.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescriptionPipe } from './filter-by-description.pipe';



@NgModule({
  declarations: [
    PhotoListComponent,
    PhotoComponent,
    LoadButtonComponent,
    FilterByDescriptionPipe
  ],
  imports: [
    CommonModule,
  ]
})
export class PhotoListModule { }

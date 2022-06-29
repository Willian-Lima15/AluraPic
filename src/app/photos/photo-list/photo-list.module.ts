import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './photo-list.component';

import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescriptionPipe } from './filter-by-description.pipe';
import { PhotosComponent } from './photos/photos.component';
import { PhotoModule } from '../photo/photo/photo.module';
import { CardModule } from 'src/app/shared/components/card/card-module/card.module';
import { SearchComponent } from './photos/search/search/search.component';
import { DarkOnHoverModule } from 'src/app/shared/directive/dark-on-hove/dark-on-hover.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescriptionPipe,
    SearchComponent
  ],
  imports: [
    CommonModule,
    PhotoModule,
    CardModule,
    DarkOnHoverModule,
    RouterModule
  ]
})
export class PhotoListModule { }

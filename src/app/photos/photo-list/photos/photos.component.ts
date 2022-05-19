import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PhotosModel } from 'src/app/shared/models/photos.model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

@Input() photos: PhotosModel[] = [];
rows: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.photos)

    this.rows = this.groupColumns(this.photos);
  }

  groupColumns(photos: PhotosModel[]) {
    const newRows = [];

    for(let index = 0; index < photos.length; index+=3) {
      newRows.push(photos.slice(index, index + 3))
    }
    return newRows;
  }
}
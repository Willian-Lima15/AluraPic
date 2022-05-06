import { Component, Input, OnInit } from '@angular/core';
import { PhotosModel } from 'src/app/shared/models/photos.model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

@Input() photos: PhotosModel[] = [];

  constructor() { }

  ngOnInit() {
  }

}

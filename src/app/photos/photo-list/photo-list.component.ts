import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from 'src/app/core/photo.service';

import { PhotoModel } from 'src/app/shared/models/photo.model';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: PhotoModel[] = [];
  filter: string = '';
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  constructor(private activatedRoute: ActivatedRoute,
    private photoService: PhotoService) { }

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data['photos'];
  }


  load() {
    this.photoService.listFromUserPaginated(this.userName, ++this.currentPage).subscribe(photos => {
      this.photos = this.photos.concat(photos);
      if(!photos.length) {
        this.filter = '';
        this.hasMore = false;
      }
    })
  }

}

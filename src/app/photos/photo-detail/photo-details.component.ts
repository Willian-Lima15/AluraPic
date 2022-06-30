import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { PhotoService } from "src/app/core/photo.service";
import { PhotoComment } from "src/app/shared/interfaces/photo-comment";
import { PhotoModel } from "src/app/shared/models/photo.model";

@Component({
  templateUrl: './photo-details.component.html',
  styleUrls: ['photo-details.css']
})
export class PhotoDetailsComponent implements OnInit {

  photo$: Observable<PhotoModel>
  comments$: Observable<PhotoComment[]>;

  constructor(
    private router: ActivatedRoute,
    private photoService: PhotoService
    ) {}

  ngOnInit(): void {
    const photoId = this.router.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(photoId)
    this.comments$ = this.photoService.getComment(photoId);

  }
}

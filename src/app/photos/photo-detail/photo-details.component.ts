import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { PhotoService } from "src/app/core/photo.service";
import { PhotoModel } from "src/app/shared/models/photo.model";

@Component({
  templateUrl: './photo-details.component.html',
  styleUrls: ['photo-details.css']
})
export class PhotoDetailsComponent implements OnInit {

  photo$: Observable<PhotoModel>

  constructor(
    private router: ActivatedRoute,
    private photoService: PhotoService
    ) {}

  ngOnInit(): void {

    this.photo$ = this.photoService.findById(
      this.router.snapshot.params.photoId
    )

  }
}

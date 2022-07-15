import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AlertService } from "src/app/core/alert.service";
import { PhotoService } from "src/app/core/photo.service";
import { PhotoModel } from "src/app/shared/models/photo.model";

@Component({
  templateUrl: './photo-details.component.html',
  styleUrls: ['photo-details.css']
})
export class PhotoDetailsComponent implements OnInit {

  photo$: Observable<PhotoModel>
  photoId: number;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService
    ) {}

  ngOnInit(): void {
    this.photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(this.photoId)

  }

  remove () {
    this.photoService
      .removePhoto(this.photoId)
      .subscribe(
        () => {
          this.alertService.sucess("Photo removed");
          this.router.navigate(['']);
        },
        err => {
          console.log(err);
          this.alertService.warning('Cold not delete the photo!');
        });
  }
}

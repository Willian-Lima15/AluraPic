import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AlertService } from "src/app/core/alert.service";
import { PhotoService } from "src/app/core/photo.service";
import { UserService } from "src/app/core/user.service";
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
    private alertService: AlertService,
    private userService: UserService
    ) {}

  ngOnInit(): void {
    this.photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(this.photoId)
    this.photo$.subscribe(() => {}, err => {
      console.log(err);
      this.router.navigate(['not-found']);
    });
  }

  remove () {
    this.photoService
      .removePhoto(this.photoId)
      .subscribe(
        () => {
          this.alertService.sucess("Photo removed", true);
          this.router.navigate(['/user', this.userService.getUserName()]);
        },
        err => {
          console.log(err);
          this.alertService.warning('Cold not delete the photo!', true);
        });
  }
}

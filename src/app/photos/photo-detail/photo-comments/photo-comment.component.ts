import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Input } from "@angular/core";
import { PhotoService } from "src/app/core/photo.service";
import { PhotoComment } from "src/app/shared/interfaces/photo-comment";

@Component({
  selector: 'app-photo-comments',
  templateUrl: './photo-comment.component.html'
})
export class PhotoCommentComponent implements OnInit {

  @Input() photoId:number;

  comments$: Observable<PhotoComment[]>;

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.comments$ = this.photoService.getComment(this.photoId)
  }
}

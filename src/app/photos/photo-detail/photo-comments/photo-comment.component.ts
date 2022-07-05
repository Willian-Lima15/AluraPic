import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Input } from "@angular/core";
import { PhotoService } from "src/app/core/photo.service";
import { PhotoComment } from "src/app/shared/interfaces/photo-comment";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-photo-comments',
  templateUrl: './photo-comment.component.html'
})
export class PhotoCommentComponent implements OnInit {

  @Input() photoId:number;
  commentForm: FormGroup;

  comments$: Observable<PhotoComment[]>;

  constructor(
    private photoService: PhotoService,
    private formBuilder: FormBuilder
    ) {}

  ngOnInit(): void {
    this.comments$ = this.photoService.getComment(this.photoId);
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.maxLength(300)]
    })
  }
}

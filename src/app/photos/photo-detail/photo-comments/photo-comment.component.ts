import { Component, OnInit } from "@angular/core";
import { Observable} from "rxjs";
import { Input } from "@angular/core";
import { PhotoService } from "src/app/core/photo.service";
import { PhotoComment } from "src/app/shared/interfaces/photo-comment";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { switchMap, tap } from "rxjs/Operator";

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

  save() {
    const comment = this.commentForm.get('comment').value as string;
    this.comments$ = this.photoService
    .addComment(this.photoId, comment)
    .pipe(switchMap(() => this.photoService.getComment(this.photoId)))
    .pipe(tap(() => {
        this.commentForm.reset();
        alert('Comentário adicionado com sucesso');
   }));
 }
}

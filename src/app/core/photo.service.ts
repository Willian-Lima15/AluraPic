import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { PhotoComment } from "../shared/interfaces/photo-comment";
import { PhotoModel } from "../shared/models/photo.model";

const API = "http://localhost:3000";

@Injectable({
  providedIn: "root",
})
export class PhotoService {
  constructor(private httpClient: HttpClient) {}

  listFromUser(userName: string) {
    return this.httpClient.get<PhotoModel[]>(API + "/" + userName + "/photos");
  }

  listFromUserPaginated(userName: string, page: number) {
    const params = new HttpParams().append("page", page.toString());
    return this.httpClient.get<PhotoModel[]>(
      API + "/" + userName + "/photos",
      { params }
    );
  }

  upload(description: string, allowComments: boolean, file: File) {

    const formData = new FormData();
    formData.append('description', description);
    formData.append('allowComments', allowComments ? 'true' : 'false');
    formData.append('imageFile', file);

    return this.httpClient.post(API + '/photos/upload', formData)
  }

  findById(photoId: number) {

    return this.httpClient.get<PhotoModel>(API + '/photos/' + photoId);
  }

  getComment(photoId: number) {
    return this.httpClient.get<PhotoComment[]>(
      API + '/photos/' + photoId + '/comments'
    );
  }

  addComment(photoId: number, commentText: string) {
    return this.httpClient.post(
      API + '/photos/' + photoId + '/comments',
      { commentText }
    );
  }

  removePhoto(photoId: number) {
    return this.httpClient.delete(API + '/photos/' + photoId )
  }

  like(photoId: number) {
    this.httpClient.post(API + '/photo/' + photoId + '/like', {}, {observe: 'response'}
    ).pipe(map(res => true))
    .pipe(catchError(err => {
      return err.status == '304' ? of(false) : throwError(err);
    }))
  }
}

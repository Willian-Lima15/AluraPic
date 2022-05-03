import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PhotosModel } from '../shared/models/photos.model';
import { CrudService } from './crudOperations.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoService extends CrudService<PhotosModel, number>{

  constructor(protected _http: HttpClient) {
    super(_http, `${environment.api.baseUrl}/photos`);
   }
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { PhotosModel } from "../shared/models/photos.model";

const API = "http://localhost:3000";

@Injectable({
  providedIn: "root",
})
export class PhotoService {
  constructor(private httpClient: HttpClient) {}

  listFromUser(userName: string) {
    return this.httpClient.get<PhotosModel[]>(API + "/flavio/photos");
  }
}

import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
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
}

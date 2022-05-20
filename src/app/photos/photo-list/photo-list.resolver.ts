import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { PhotoService } from "src/app/core/photo.service";
import { PhotosModel } from "src/app/shared/models/photos.model";

@Injectable({
  providedIn:'root'
})
export class PhotoListResolver implements Resolve<Observable<PhotosModel[]>> {

  constructor(private service: PhotoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      const userName = route.params.userName;
      return this.service.listFromUser(userName)
  }
}

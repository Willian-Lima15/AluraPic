import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { PhotoService } from "src/app/core/photo.service";
import { PhotoModel } from "src/app/shared/models/photo.model";

@Injectable({
  providedIn:'root'
})
export class PhotoListResolver implements Resolve<Observable<PhotoModel[]>> {

  constructor(private service: PhotoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      const userName = route.params.userName;
      return this.service.listFromUserPaginated(userName, 1);
  }
}

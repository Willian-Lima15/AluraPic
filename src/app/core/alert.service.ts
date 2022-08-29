import { Injectable } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";
import { Subject } from "rxjs";
import { AlertModel, AlertType } from "../shared/interfaces/alertModel";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alertSubject: Subject<AlertModel> = new Subject<AlertModel>();
  keepAfterRouteChange = false;

  constructor(
    private router: Router
  ) {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        if(this.keepAfterRouteChange){
          this.keepAfterRouteChange = false;
        }else {
          this.clear();
        }
      }
    })
  }

  sucess(message: string, keepAfterRouteChange: boolean = false) {
    this.alert(AlertType.SUCCESS, message, keepAfterRouteChange);
  }

  warning(message: string, keepAfterRouteChange: boolean = false) {
    this.alert(AlertType.SUCCESS, message, keepAfterRouteChange);
  }

  danger(message: string, keepAfterRouteChange: boolean = false) {
    this.alert(AlertType.DANGER, message, keepAfterRouteChange);
  }

  info(message: string, keepAfterRouteChange: boolean = false) {
    this.alert(AlertType.INFOR, message, keepAfterRouteChange);
  }

  private alert(alertType: AlertType, message: string, keepAfterRouteChange:boolean) {

    this.alertSubject.next(new AlertModel(alertType, message))
  }

  getAlert() {
    return this.alertSubject.asObservable();
  }

  clear(){
    this.alertSubject.next(null);
  }
}

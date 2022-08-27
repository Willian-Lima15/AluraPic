import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { AlertModel, AlertType } from "../shared/interfaces/alertModel";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alertSubject: Subject<AlertModel> = new Subject<AlertModel>();
  keepAfterRouteChange = false;

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
}

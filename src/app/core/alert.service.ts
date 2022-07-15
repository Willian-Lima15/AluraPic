import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { AlertModel, AlertType } from "../shared/interfaces/alertModel";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alertSubject: Subject<AlertModel> = new Subject<AlertModel>();

  sucess(message: string) {
    this.alert(AlertType.SUCCESS, message);
  }

  warning(message: string) {
    this.alert(AlertType.SUCCESS, message);
  }

  danger(message: string) {
    this.alert(AlertType.DANGER, message);
  }

  info(message: string) {
    this.alert(AlertType.INFOR, message)
  }

  private alert(alertType: AlertType, message: string) {

    this.alertSubject.next(new AlertModel(alertType, message))
  }

  getAlert() {
    return this.alertSubject.asObservable();
  }
}

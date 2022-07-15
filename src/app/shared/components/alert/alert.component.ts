import { Component, Input } from "@angular/core";
import { AlertModel } from "../../interfaces/alertModel";
import { AlertService } from "src/app/core/alert.service";
import { AlertType } from "../../interfaces/alertModel";


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponet {

  @Input() timeout = 3000;
  alerts: AlertModel[] = [];

  constructor(private alertService: AlertService) {

    this.alertService
        .getAlert()
        .subscribe(alert => {
          if(!alert) {
            this.alerts = [];
            return;
          }
          this.alerts.push(alert);
          setTimeout(() => this.removeAlert(alert), this.timeout)
        })
  }

  removeAlert(alertToRemove: AlertModel) {
    this.alerts = this.alerts.filter(alert => alert != alertToRemove)
  }

  getAlertClass(alert: AlertModel) {
    if(!alert) return '';

    switch (alert.alertType){

      case AlertType.DANGER:
        return 'alert alert-danger'
      case AlertType.INFOR:
        return 'alert alert-info'
      case AlertType.SUCCESS:
        return 'alert alert-sucess'
      case AlertType.WARNING:
        return 'alert alert-warning'
    }
  }
}

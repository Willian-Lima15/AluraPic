export class AlertModel {

  constructor(
    public readonly alertType: AlertType,
    public readonly message: string
  ) {}
}

export enum AlertType {

    SUCCESS,
    WARNING,
    DANGER,
    INFOR
}

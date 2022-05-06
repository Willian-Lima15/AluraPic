import { Component, Input } from "@angular/core";
import { PhotoService } from "src/app/core/photo.service";

@Component({
  selector: "app-photo",
  templateUrl: "photo.component.html",
})
export class PhotoComponent {
  @Input() url = "";
  @Input() description = "";
}

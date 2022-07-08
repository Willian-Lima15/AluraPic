import { Directive, ElementRef, Input, OnInit, Renderer } from "@angular/core";
import { UserService } from "src/app/core/user.service";
import { PhotoModel } from "src/app/shared/models/photo.model";

@Directive({
  selector:'[photoOwnerOnly]'
})
export class PhotoOwnerOnlyDirective implements OnInit {

  @Input() ownerPhoto: PhotoModel;

  constructor (
    private element: ElementRef<any>,
    private renderer: Renderer,
    private userService: UserService
    ) {}

  ngOnInit(): void {
    this.userService
      .getUser()
      .subscribe(user => {
        if(!user || user.id != this.ownerPhoto.userId)
        this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
      })
  }
}

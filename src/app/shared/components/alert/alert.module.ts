import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponet } from './alert.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AlertComponet
  ],
  exports: [
    AlertComponet
  ]
})
export class AlertModule { }

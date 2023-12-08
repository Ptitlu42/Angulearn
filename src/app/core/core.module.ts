import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutCoreComponent } from './layout/layout-core/layout-core.component';



@NgModule({
  declarations: [
    LayoutCoreComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutCoreComponent
  ]
})
export class CoreModule { }

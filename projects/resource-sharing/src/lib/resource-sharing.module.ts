import { NgModule } from '@angular/core';
import { ResourceSharingComponent } from './resource-sharing.component';
import { SharedStylesComponent } from './shared-styles/shared-styles.component';


@NgModule({
  declarations: [
    SharedStylesComponent
  ],
  imports: [
  ],
  exports: [
    SharedStylesComponent
  ]
})
export class ResourceSharingModule { }

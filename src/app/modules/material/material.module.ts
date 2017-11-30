import { NgModule } from '@angular/core';
import {
  MatTabsModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule
 } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  exports: [
    FlexLayoutModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class MaterialModule { }

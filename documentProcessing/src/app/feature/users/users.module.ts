import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { HomeUserComponent } from './home-user/home-user.component';
import { TXSettings } from '@txtextcontrol/tx-ng-document-editor/lib/document-editor/tx-settings';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PdfViewerComponent } from './shared/components/pdf-viewer/pdf-viewer.component';


@NgModule({
  declarations: [
    HomeUserComponent,
    PdfViewerComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ]
})
export class UsersModule { }

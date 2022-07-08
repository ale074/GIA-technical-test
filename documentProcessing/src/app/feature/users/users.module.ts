import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { HomeUserComponent } from './home-user/home-user.component';
import { TXSettings } from '@txtextcontrol/tx-ng-document-editor/lib/document-editor/tx-settings';


@NgModule({
  declarations: [
    HomeUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }

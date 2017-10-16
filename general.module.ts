import {NgModule} from '@angular/core';
import {ActionAlertComponent} from "./action-alert/action-alert.component";
import {NotificationItemComponent} from "./notifications/notification-item/notification-item.component";
import {NotificationQueueComponent} from "./notifications/notification-queue/notification-queue.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NotificationsService} from "angular2-notifications/dist";
import {IconComponent} from "./icon/icon.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    ActionAlertComponent,
    IconComponent,
    NotificationItemComponent,
    NotificationQueueComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule
  ],
  exports: [
    ActionAlertComponent,
    IconComponent,
    NotificationItemComponent,
    NotificationQueueComponent,
  ],
  providers: [
    NotificationsService
  ]
})
export class GeneralModule {}

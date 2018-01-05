import {Component, ViewEncapsulation, OnInit, Input} from '@angular/core';

import {SimpleNotificationsComponent, NotificationsService, Notification} from 'angular2-notifications';

const SELECTOR: string = 'notification-queue';

@Component({
  selector: SELECTOR,
  templateUrl: './notification-queue.html',
  styleUrls: ['./notification-queue.scss'],
  encapsulation: ViewEncapsulation.None
})

export class NotificationQueueComponent extends SimpleNotificationsComponent implements OnInit {

  @Input() service: NotificationsService;

  constructor(private _notificationsService: NotificationsService) {
    super(_notificationsService);

    super.attachChanges({
      position: ["top", "left"],
      animate: 'fromTop',
      timeOut: 10000,
      showProgressBar: true,
      pauseOnHover: true,
      lastOnBottom: false,
      clickToClose: false,
    });
  }

  ngOnInit() {
    if (this.service) {
      // This is indentical to super.ngOnInit() but with non-global service
      this.service.getChangeEmitter()
        .subscribe(item => {
          switch (item.command) {
            case 'cleanAll':
              this.notifications = [];
              break;

            case 'clean': this.cleanSingle(item.id!);
              break;

            case 'set':
              if (item.add) {
                this.add(item.notification!)
              } else {
                this.defaultBehavior(item)
              };
              break;

            default:
              this.defaultBehavior(item);
              break;
          }
        });
    } else {
      super.ngOnInit();
    }

  }

  onItemClose(item: Notification) {
    const service = this.service || this._notificationsService;
    service.set(item, false);
  }
}

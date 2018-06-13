import { Component, ViewEncapsulation, OnInit, Input, ChangeDetectorRef, OnDestroy } from '@angular/core';

import {SimpleNotificationsComponent, NotificationsService, Notification} from 'angular2-notifications';
import { Subscription } from 'rxjs/Subscription';

const SELECTOR: string = 'notification-queue';

@Component({
  selector: SELECTOR,
  templateUrl: './notification-queue.html',
  styleUrls: ['./notification-queue.scss'],
  encapsulation: ViewEncapsulation.None
})

export class NotificationQueueComponent extends SimpleNotificationsComponent implements OnInit, OnDestroy {

  @Input('service') localService: NotificationsService;

  private localListener: Subscription;

  constructor(
    private _notificationsService: NotificationsService,
    private _cdr: ChangeDetectorRef
  ) {
    super(_notificationsService, _cdr);

    super.attachChanges({
      position: ['top', 'left'],
      animate: 'fromTop',
      timeOut: 10000,
      showProgressBar: true,
      pauseOnHover: true,
      lastOnBottom: false,
      clickToClose: false,
    });
  }

  ngOnInit() {
    if (this.localService) {
      // This is identical to super.ngOnInit() but with non-global service
      this.localListener = this.localService.emitter
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
              }
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
    const service = this.localService || this._notificationsService;
    service.set(item, false);
  }

  ngOnDestroy(): void {
    if (this.localListener) {
      this.localListener.unsubscribe();
    }
  }
}

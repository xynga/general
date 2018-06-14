import { Observable } from 'rxjs/Observable';
import { Component, NgModule, ViewChild } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Notification, NotificationsService } from 'angular2-notifications';
import { async, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconComponent, NotificationItemComponent } from '../..';
import { NotificationQueueComponent } from './notification-queue.component';
import { GeneralModule } from '../../general.module';

export interface NotificationEvent {
  add?: boolean;
  command: string;
  id?: string;
  notification?: Notification;
}

export class MockNotificationsService {
  public emitter: Subject<NotificationEvent> = new Subject<NotificationEvent>();

  setWasCalled = false;

  getChangeEmitter(): Observable<any> {
    return this.emitter;
  }

  set(a: any, b: any) {}
}

// NotificationQueueTestComponent: used to test the input to
// NotificationQueueComponent, "localService" aliased as "service"
@Component({
  selector: 'app-nqtc',
  template: '<notification-queue [service]="mockService"></notification-queue>'
})
export class NotificationQueueTestComponent {
  @ViewChild(NotificationQueueComponent)
  public NQC: NotificationQueueComponent;

  mockService = new MockNotificationsService();
}

@NgModule({
  declarations: [
    NotificationQueueTestComponent
  ],
  imports: [
    GeneralModule
  ]
}) export class FakeModule {}

describe('Notifications Queue Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NotificationQueueComponent,
        NotificationItemComponent,
        IconComponent,
        NotificationQueueTestComponent
      ],
      providers: [
        {provide: NotificationsService, useClass: MockNotificationsService}
      ],
      imports: [
        BrowserAnimationsModule
      ]
    }).compileComponents();
  }));
  it('should be created successfully', async( () => {
    const fixture = TestBed.createComponent(NotificationQueueComponent);
    const NQC = fixture.debugElement.componentInstance;
    expect(NQC).toBeTruthy();
  }));
  it('should contain localService', async( () => {
    // Creates a Test Component that contains a NotificationQueueComponent
    // and passes a (Mock)NotificationsService as input to test the
    // presence of the localService property on the NotificationQueueComp.
    const fixture = TestBed.createComponent(NotificationQueueTestComponent);
    const NQTC = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(NQTC.NQC.localService).toBeTruthy();
  }));
  it('Import the notification service succesfully', async( () => {
    const fixture = TestBed.createComponent(NotificationQueueComponent);
    const NQC = fixture.debugElement.componentInstance;
    NQC.localService = new MockNotificationsService();
    NQC.ngOnInit();
    expect(NQC.localService).toBeTruthy();
  }));
  it('resets the notifications to empty if cleanAll command is sent', async( () => {
    const fixture = TestBed.createComponent(NotificationQueueComponent);
    const NQC = fixture.debugElement.componentInstance;
    NQC.notifications = ['cat', 'dog', 'rat'];
    NQC.localService = new MockNotificationsService();
    NQC.ngOnInit();
    NQC.localService.emitter.next({command: 'cleanAll'});
    expect(NQC.notifications).toEqual([]);
  }));
  it('calls the cleanSingle command', async( () => {
    const fixture = TestBed.createComponent(NotificationQueueComponent);
    const NQC = fixture.debugElement.componentInstance;
    NQC.localService = new MockNotificationsService();
    const spy = spyOn(NQC, 'cleanSingle').and.stub();
    NQC.ngOnInit();
    NQC.localService.emitter.next({command: 'clean'});
    expect(spy).toHaveBeenCalled();
  }));
  it('calls the calls defaultBehavior if set command is given with no add', async( () => {
    const fixture = TestBed.createComponent(NotificationQueueComponent);
    const NQC = fixture.debugElement.componentInstance;
    NQC.localService = new MockNotificationsService();
    const spy = spyOn(NQC, 'defaultBehavior').and.stub();
    NQC.ngOnInit();
    NQC.localService.emitter.next({command: 'set'});
    expect(spy).toHaveBeenCalled();
  }));
  it('calls add if set command is given with add', async( () => {
    const fixture = TestBed.createComponent(NotificationQueueComponent);
    const NQC = fixture.debugElement.componentInstance;
    NQC.localService = new MockNotificationsService();
    const spy = spyOn(NQC, 'add').and.stub();
    NQC.ngOnInit();
    NQC.localService.emitter.next({command: 'set', add: 'newNotification'});
    expect(spy).toHaveBeenCalled();
  }));
  it('calls defaultBehavior if invalid command is given', async( () => {
    const fixture = TestBed.createComponent(NotificationQueueComponent);
    const NQC = fixture.debugElement.componentInstance;
    NQC.localService = new MockNotificationsService();
    const spy = spyOn(NQC, 'defaultBehavior').and.stub();
    NQC.ngOnInit();
    NQC.localService.emitter.next({command: 'WadeWilson'});
    expect(spy).toHaveBeenCalled();
  }));
});

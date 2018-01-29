import { TestBed, async } from '@angular/core/testing';
import { IconComponent } from 'xynga-general';
import { ActionAlertComponent } from 'xynga-general';
import { NotificationItemComponent } from 'xynga-general';
import { NotificationsService, Notification} from 'angular2-notifications';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EventEmitter } from '@angular/core';
import { NotificationQueueComponent } from 'xynga-general';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {SimpleNotificationsComponent} from "angular2-notifications/dist";
import { CodeHighlightDirective } from "xynga-general";
import { MockComponent } from './mock/mock.component';
import {By} from "@angular/platform-browser";

interface NotificationEvent {
  add?: boolean;
  command: string;
  id?: string;
  notification?: Notification;
}

class MockNotificationsService{
  public emitter: Subject<NotificationEvent> = new Subject<NotificationEvent>();

  setWasCalled = false;

  getChangeEmitter(): Observable<any>{
    return this.emitter;
  }

  set(a: any, b: any): void{
    this.setWasCalled = true;
    return
  }
}



describe('Icon Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        IconComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;
    expect(icon).toBeTruthy();
  }));
  it('should create the alert-lg icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'alert-lg';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['alert-lg']);
  }));
  it('should create the alert-sm icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'alert-sm';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['alert-sm']);
  }));
  it('should create the analysis icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'analysis';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['analysis']);
  }));
  it('should create the arrow-down-red icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'arrow-down-red';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['arrow-down-red']);
  }));
  it('should create the arrow-up-green icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'arrow-up-green';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['arrow-up-green']);
  }));
  it('should create the call icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'call';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['call']);
  }));
  it('should create the check icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'check';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['check']);
  }));
  it('should create the chevron-down-green icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'chevron-down-green';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['chevron-down-green']);
  }));
  it('should create the chevron-left-blue icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'chevron-left-blue';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['chevron-left-blue']);
  }));
  it('should create the chevron-left-green icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'chevron-left-green';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['chevron-left-green']);
  }));
  it('should create the chevron-right-blue icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'chevron-right-blue';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['chevron-right-blue']);
  }));
  it('should create the chevron-right-grey icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'chevron-right-grey';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['chevron-right-grey']);
  }));
  it('should create the close icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'close';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['close']);
  }));
  it('should create the conversion icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'conversion';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['conversion']);
  }));
  it('should create the dashboard icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'dashboard';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['dashboard']);
  }));
  it('should create the edit icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'edit';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['edit']);
  }));
  it('should create the flyout-tab-left-blue icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'flyout-tab-left-blue';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['flyout-tab-left-blue']);
  }));
  it('should create the flyout-tab-left-white-sm icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'flyout-tab-left-white-sm';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['flyout-tab-left-white-sm']);
  }));
  it('should create the flyout-tab-top-white icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'flyout-tab-top-white';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['flyout-tab-top-white']);
  }));
  it('should create the help icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'help';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['help']);
  }));
  it('should create the help-sm icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'help-sm';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['help-sm']);
  }));
  it('should create the helpful icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'helpful';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['helpful']);
  }));
  it('should create the icon-forapproval icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'icon-forapproval';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['icon-forapproval']);
  }));
  it('should create the icon-withoutlayout icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'icon-withoutlayout';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['icon-withoutlayout']);
  }));
  it('should create the manage icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'manage';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['manage']);
  }));
  it('should create the manage-layouts icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'manage-layouts';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['manage-layouts']);
  }));
  it('should create the manage-tenants icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'manage-tenants';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['manage-tenants']);
  }));
  it('should create the manage-vertex-users icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'manage-vertex-users';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['manage-vertex-users']);
  }));
  it('should create the messages icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'messages';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['messages']);
  }));
  it('should create the messages-lg icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'messages-lg';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['messages-lg']);
  }));
  it('should create the no-layout icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'no-layout';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['no-layout']);
  }));
  it('should create the notice icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'notice';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['notice']);
  }));
  it('should create the notices icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'notices';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['notices']);
  }));
  it('should create the page-forapproval-sm icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'page-forapproval-sm';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['page-forapproval-sm']);
  }));
  it('should create the page-layoutrequests icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'page-layoutrequests';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['page-layoutrequests']);
  }));
  it('should create the page-layoutsrejected icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'page-layoutsrejected';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['page-layoutsrejected']);
  }));
  it('should create the page-withoutlayout-sm icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'page-withoutlayout-sm';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['page-withoutlayout-sm']);
  }));
  it('should create the plus icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'plus';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['plus']);
  }));
  it('should create the plus-white icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'plus-white';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['plus-white']);
  }));
  it('should create the remove icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'remove';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['remove']);
  }));
  it('should create the remove-hover icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'remove-hover';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['remove-hover']);
  }));
  it('should create the reports icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'reports';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['reports']);
  }));
  it('should create the search icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'search';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['search']);
  }));
  it('should create the settings icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'settings';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['settings']);
  }));
  it('should create the settings-hover icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'settings-hover';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['settings-hover']);
  }));
  it('should create the star-filled icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'star-filled';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['star-filled']);
  }));
  it('should create the star-hollow icon', async(() => {
    const fixture = TestBed.createComponent(IconComponent);
    const icon = fixture.debugElement.componentInstance;

    icon.icon = 'star-hollow';
    fixture.detectChanges();

    expect(icon.svg.nativeElement.innerHTML).toEqual(icon.icons['star-hollow']);
  }));

});

describe('Action Alert Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ActionAlertComponent,
        IconComponent
      ],
    }).compileComponents();
  }));
  it('should create the component', async( () => {
    const fixture = TestBed.createComponent(ActionAlertComponent);
    const AAC = fixture.debugElement.componentInstance;
    expect(AAC).toBeTruthy();
  }));
  it('should have the correct title', async( () => {
    const fixture = TestBed.createComponent(ActionAlertComponent);
    const AAC = fixture.debugElement.componentInstance;
    AAC.count = 135;
    AAC.text = "LimaOscarLima";
    fixture.detectChanges();
    expect(AAC.title).toEqual("135 LimaOscarLima");
  }));
});

describe('Notifications Item Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NotificationItemComponent,
        IconComponent
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
    const fixture = TestBed.createComponent(NotificationItemComponent);
    const NIC = fixture.debugElement.componentInstance;
    NIC.item = new Notification('warn');
    NIC.ngOnInit();
    expect(NIC).toBeTruthy();
  }));
  it('calls attachOverrides() when item.override is set', async( () => {
    const fixture = TestBed.createComponent(NotificationItemComponent);
    const NIC = fixture.debugElement.componentInstance;
    NIC.item = new Notification('warn');
    NIC.item.override = true;
    var spy = spyOn(NIC, 'attachOverrides' ).and.stub();
    NIC.ngOnInit();
    expect(spy).toHaveBeenCalled();
  }));
  it('calls startTimeOut() when item.override is set', async( () => {
    const fixture = TestBed.createComponent(NotificationItemComponent);
    const NIC = fixture.debugElement.componentInstance;
    NIC.item = new Notification('warn');
    NIC.timeOut = 20;
    var spy = spyOn(NIC, 'startTimeOut' ).and.stub();
    NIC.ngOnInit();
    expect(spy).toHaveBeenCalled();
  }));
  it('sets the safeSvg onInit', async( () => {
    const fixture = TestBed.createComponent(NotificationItemComponent);
    const NIC = fixture.debugElement.componentInstance;
    NIC.item = new Notification('warn');
    spyOn(NIC.domSanitizer, 'bypassSecurityTrustHtml').and.returnValue('TEST');
    NIC.ngOnInit();
    expect(NIC.safeSvg).toEqual('TEST');
  }));

  it('should set item.state to animate on init', async( () =>{
    const fixture = TestBed.createComponent(NotificationItemComponent);
    const NIC = fixture.debugElement.componentInstance;
    NIC.item = new Notification('warn');
    NIC.animate = "scale";
    fixture.detectChanges();
    expect(NIC.item.state).toEqual("scale");
  }));
  it('must set the steps, speed, and start when the timeOut is set', async( () => {
    const fixture = TestBed.createComponent(NotificationItemComponent);
    const NIC = fixture.debugElement.componentInstance;
    NIC.item = new Notification('warn');
    NIC.timeOut = 10;
    fixture.detectChanges();
    expect(NIC.steps).toEqual(1);
    expect(NIC.speed).toEqual(10);
    expect(NIC.start).toBeGreaterThan(0);
  }));
  it('Calls the runOutsideAngular() function in the startTimeout method', async( () => {
    const fixture = TestBed.createComponent(NotificationItemComponent);
    const NIC = fixture.debugElement.componentInstance;
    NIC.item = new Notification('warn');
    var spy = spyOn(NIC.zone, 'runOutsideAngular').and.stub();
    NIC.timeOut = 10;
    NIC.startTimeOut();
    expect(spy).toHaveBeenCalled();
  }));
  it('should not set StopTime to true if pause on hover is false', async ( () => {
    const fixture = TestBed.createComponent(NotificationItemComponent);
    const NIC = fixture.debugElement.componentInstance;
    NIC.item = new Notification('warn');
    NIC.pauseOnHover = false;
    NIC.onEnter();
    expect(NIC.stopTime).not.toBeTruthy();
  }));
  it('should set stopTime to true if pauseOnHover is true when OnEnter() is called', async( () => {
    const fixture = TestBed.createComponent(NotificationItemComponent);
    const NIC = fixture.debugElement.componentInstance;
    NIC.item = new Notification('warn');
    NIC.pauseOnHover = true;
    NIC.onEnter();
    fixture.detectChanges();
    expect(NIC.stopTime).toEqual(true);
  }));
  it('should set stopTime to false if pauseOnHover is true when OnLeave() is called', async( () => {
    const fixture = TestBed.createComponent(NotificationItemComponent);
    const NIC = fixture.debugElement.componentInstance;
    NIC.item = new Notification('warn');
    NIC.pauseOnHover = true;
    NIC.onLeave();
    fixture.detectChanges();
    expect(NIC.stopTime).toEqual(false);
  }));
  it('should not set stopTime to false if pauseOnHover is true when OnLeave() is called', async( () => {
    const fixture = TestBed.createComponent(NotificationItemComponent);
    const NIC = fixture.debugElement.componentInstance;
    NIC.item = new Notification('warn');
    NIC.stopTime = true;
    NIC.pauseOnHover = false;
    NIC.onLeave();
    fixture.detectChanges();
    expect(NIC.stopTime).toEqual(true);
  }));
  it('should return position * 90 if position !== 0', async( () => {
    const fixture = TestBed.createComponent(NotificationItemComponent);
    const NIC = fixture.debugElement.componentInstance;
    NIC.item = new Notification('warn');
    NIC.position = 1;
    var temp = NIC.setPosition();
    expect(temp).toEqual(90);
  }));
  it('should check item.click.emit is called', async( () => {
    const fixture = TestBed.createComponent(NotificationItemComponent);
    const NIC = fixture.debugElement.componentInstance;
    NIC.item = new Notification('warn');
    NIC.item.click = new EventEmitter();
    NIC.clickToClose = false;
    var spy = spyOn(NIC.item.click, 'emit').and.stub();
    NIC.onClick();
    expect(spy).toHaveBeenCalled();
  }));
  it('should check if remove is called when clickToClose is true', async( () => {
    const fixture = TestBed.createComponent(NotificationItemComponent);
    const NIC = fixture.debugElement.componentInstance;
    NIC.item = new Notification('warn');
    NIC.item.click = new EventEmitter();
    NIC.clickToClose = true;
    var spy = spyOn(NIC, 'remove').and.stub();
    NIC.onClick();
    expect(spy).toHaveBeenCalled();
  }));
  it('should return 0 if position == 0', async( () => {
    const fixture = TestBed.createComponent(NotificationItemComponent);
    const NIC = fixture.debugElement.componentInstance;
    NIC.item = new Notification('warn');
    NIC.position = 0;
    var temp = NIC.setPosition();
    expect(temp).toEqual(0);
  }));
  it('should emit "This is a test" when onClick() is called', async( () => {
    const fixture = TestBed.createComponent(NotificationItemComponent);
    const NIC = fixture.debugElement.componentInstance;
    NIC.item = new Notification('warn');
    NIC.item.click = new EventEmitter();
    var temp = NIC.item.click.subscribe(
      (data: any) => {
        expect(data).toEqual("This is a test");
      }
    );
    NIC.onClick("This is a test");
  }));
  it('Set the TimeOut to 34 using the overrides', async ( () => {
    const fixture = TestBed.createComponent(NotificationItemComponent);
    const NIC = fixture.debugElement.componentInstance;
    NIC.item = new Notification('warn');
    NIC.item.override = {'timeOut': 34};
    NIC.timeOut = 10;
    NIC.attachOverrides();
    expect(NIC.timeOut).toEqual(34);
  }));
  it('if this.count++ === this.steps then call the zone.run function', async( () => {
    const fixture = TestBed.createComponent(NotificationItemComponent);
    const NIC = fixture.debugElement.componentInstance;
    NIC.item = new Notification('warn');
    NIC.count = 2;
    NIC.steps = 3;
    var spy = spyOn(NIC.zone, 'run').and.stub();
    NIC.instance();
    expect(spy).toHaveBeenCalled();
  }));
  it('if showProgressBar is true then call the zone.run function', async( () => {
    const fixture = TestBed.createComponent(NotificationItemComponent);
    const NIC = fixture.debugElement.componentInstance;
    NIC.item = new Notification('warn');
    NIC.count = 5;
    NIC.steps = 3;
    NIC.stopTime = false;
    NIC.showProgressBar = true;
    var spy = spyOn(NIC.zone, 'run').and.stub();
    NIC.instance();
    expect(spy).toHaveBeenCalled();
  }));
  it('sets the item.state to animate + "Out" ', async( () => {
    const fixture = TestBed.createComponent(NotificationItemComponent);
    const NIC = fixture.debugElement.componentInstance;
    NIC.item = new Notification('warn');
    NIC.animate = "scale";
    NIC.remove();
    expect(NIC.item.state).toEqual("scaleOut");
  }));
  it('Calls the NotificationsService.set in the remove function', async( () => {
    const fixture = TestBed.createComponent(NotificationItemComponent);
    const NIC = fixture.debugElement.componentInstance;
    var spy = spyOn(NIC.notificationService, 'set').and.stub();
    NIC.remove();
    expect(spy).toHaveBeenCalled();
  }));
});
describe('Notifications Queue Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NotificationQueueComponent,
        NotificationItemComponent,
        IconComponent
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
  it('Import the notification service succesfully', async( () => {
    const fixture = TestBed.createComponent(NotificationQueueComponent);
    const NQC = fixture.debugElement.componentInstance;
    NQC.service = new MockNotificationsService();
    NQC.ngOnInit();
    expect(NQC.service).toBeTruthy();
  }));
  it('resets the notifications to empty if cleanAll command is sent', async( () => {
    const fixture = TestBed.createComponent(NotificationQueueComponent);
    const NQC = fixture.debugElement.componentInstance;
    NQC.notifications = ['cat','dog','rat'];
    NQC.service = new MockNotificationsService();
    NQC.ngOnInit();
    NQC.service.emitter.next({command: 'cleanAll'});
    expect(NQC.notifications).toEqual([]);
  }));
  it('calls the cleanSingle command', async( () => {
    const fixture = TestBed.createComponent(NotificationQueueComponent);
    const NQC = fixture.debugElement.componentInstance;
    NQC.service = new MockNotificationsService();
    var spy = spyOn(NQC, 'cleanSingle').and.stub();
    NQC.ngOnInit();
    NQC.service.emitter.next({command: 'clean'});
    expect(spy).toHaveBeenCalled();
  }));
  it('calls the calls defaultBehavior if set command is given with no add', async( () => {
    const fixture = TestBed.createComponent(NotificationQueueComponent);
    const NQC = fixture.debugElement.componentInstance;
    NQC.service = new MockNotificationsService();
    var spy = spyOn(NQC, 'defaultBehavior').and.stub();
    NQC.ngOnInit();
    NQC.service.emitter.next({command: 'set'});
    expect(spy).toHaveBeenCalled();
  }));
  it('calls add if set command is given with add', async( () => {
    const fixture = TestBed.createComponent(NotificationQueueComponent);
    const NQC = fixture.debugElement.componentInstance;
    NQC.service = new MockNotificationsService();
    var spy = spyOn(NQC, 'add').and.stub();
    NQC.ngOnInit();
    NQC.service.emitter.next({command: 'set', add: 'newNotification'});
    expect(spy).toHaveBeenCalled();
  }));
  it('calls defaultBehavior if invalid command is given', async( () => {
    const fixture = TestBed.createComponent(NotificationQueueComponent);
    const NQC = fixture.debugElement.componentInstance;
    NQC.service = new MockNotificationsService();
    var spy = spyOn(NQC, 'defaultBehavior').and.stub();
    NQC.ngOnInit();
    NQC.service.emitter.next({command: 'WadeWilson'});
    expect(spy).toHaveBeenCalled();
  }));
  it('calls the set command on service when item close is called', async( () => {
    const fixture = TestBed.createComponent(NotificationQueueComponent);
    const NQC = fixture.debugElement.componentInstance;
    NQC.service = new MockNotificationsService();
    var spy = spyOn(NQC.service, 'set').and.stub();
    NQC.onItemClose();
    expect(spy).toHaveBeenCalled();
  }));
  it('', async( () => {
    const fixture = TestBed.createComponent(NotificationQueueComponent);
    const NQC = fixture.debugElement.componentInstance;
  }));
});
describe('Code Highlight Directive', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MockComponent,
        CodeHighlightDirective
      ]
    }).compileComponents();
    var Prism = require('prismjs');
  }));
  it('runs all options for CodeHighlightDirective', async ( () => {
    TestBed.compileComponents().then(() => {
      const fixture = TestBed.createComponent(MockComponent);
      const codeDir = fixture.debugElement.query(By.directive(CodeHighlightDirective));
      expect(codeDir).not.toBeNull();
    });
  }));
  it('runs ngAfterViewInit correctly with typescript as codehighlight', async ( () => {
    TestBed.compileComponents().then(() => {
      const fixture = TestBed.createComponent(MockComponent);
      const codeDir = fixture.debugElement.query(By.directive(CodeHighlightDirective));
      const dirInstance = codeDir.injector.get(CodeHighlightDirective);
      dirInstance.codeHighlight = 'typescript';
      var spy = jasmine.createSpy('ngAfterViewInit').and.callFake(function (){
        var codeType = this.codeHighlight ? this.codeHighlight : 'markup';
        expect(codeType).toEqual('typescript');
      });
      dirInstance.ngAfterViewInit();


    });
  }));
  it('runs ngAfterViewInit correctly with no set codehighlight', async ( () => {
    TestBed.compileComponents().then(() => {
      const fixture = TestBed.createComponent(MockComponent);
      const codeDir = fixture.debugElement.query(By.directive(CodeHighlightDirective));
      const dirInstance = codeDir.injector.get(CodeHighlightDirective);
      var spy = jasmine.createSpy('ngAfterViewInit').and.callFake(function (){
        var codeType = this.codeHighlight ? this.codeHighlight : 'markup';
        expect(codeType).toEqual('markup');
      });
      dirInstance.ngAfterViewInit();


    });
  }));
});


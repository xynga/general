import { async, TestBed } from '@angular/core/testing';
import { EventEmitter } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Notification, NotificationsService } from 'angular2-notifications';
import { MockNotificationsService } from '../notification-queue/notification-queue.component.spec';
import { IconComponent } from '../..';
import { NotificationItemComponent } from './notification-item.component';

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
    const spy = spyOn(NIC, 'attachOverrides' ).and.stub();
    NIC.ngOnInit();
    expect(spy).toHaveBeenCalled();
  }));
  it('calls startTimeOut() when item.override is set', async( () => {
    const fixture = TestBed.createComponent(NotificationItemComponent);
    const NIC = fixture.debugElement.componentInstance;
    NIC.item = new Notification('warn');
    NIC.timeOut = 20;
    const spy = spyOn(NIC, 'startTimeOut' ).and.stub();
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

  it('should set item.state to animate on init', async( () => {
    const fixture = TestBed.createComponent(NotificationItemComponent);
    const NIC = fixture.debugElement.componentInstance;
    NIC.item = new Notification('warn');
    NIC.animate = 'scale';
    fixture.detectChanges();
    expect(NIC.item.state).toEqual('scale');
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
    const spy = spyOn(NIC.zone, 'runOutsideAngular').and.stub();
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
    const temp = NIC.setPosition();
    expect(temp).toEqual(90);
  }));
  it('should check item.click.emit is called', async( () => {
    const fixture = TestBed.createComponent(NotificationItemComponent);
    const NIC = fixture.debugElement.componentInstance;
    NIC.item = new Notification('warn');
    NIC.item.click = new EventEmitter();
    NIC.clickToClose = false;
    const spy = spyOn(NIC.item.click, 'emit').and.stub();
    NIC.onClick();
    expect(spy).toHaveBeenCalled();
  }));
  it('should check if remove is called when clickToClose is true', async( () => {
    const fixture = TestBed.createComponent(NotificationItemComponent);
    const NIC = fixture.debugElement.componentInstance;
    NIC.item = new Notification('warn');
    NIC.item.click = new EventEmitter();
    NIC.clickToClose = true;
    const spy = spyOn(NIC, 'remove').and.stub();
    NIC.onClick();
    expect(spy).toHaveBeenCalled();
  }));
  it('should return 0 if position == 0', async( () => {
    const fixture = TestBed.createComponent(NotificationItemComponent);
    const NIC = fixture.debugElement.componentInstance;
    NIC.item = new Notification('warn');
    NIC.position = 0;
    const temp = NIC.setPosition();
    expect(temp).toEqual(0);
  }));
  it('should emit "This is a test" when onClick() is called', async( () => {
    const fixture = TestBed.createComponent(NotificationItemComponent);
    const NIC = fixture.debugElement.componentInstance;
    NIC.item = new Notification('warn');
    NIC.item.click = new EventEmitter();
    NIC.item.click.subscribe(
      (data: any) => {
        expect(data).toEqual('This is a test');
      }
    );
    NIC.onClick('This is a test');
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
    const spy = spyOn(NIC.zone, 'run').and.stub();
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
    const spy = spyOn(NIC.zone, 'run').and.stub();
    NIC.instance();
    expect(spy).toHaveBeenCalled();
  }));
  it('sets the item.state to animate + "Out" ', async( () => {
    const fixture = TestBed.createComponent(NotificationItemComponent);
    const NIC = fixture.debugElement.componentInstance;
    NIC.item = new Notification('warn');
    NIC.animate = 'scale';
    NIC.remove();
    expect(NIC.item.state).toEqual('scaleOut');
  }));
  it('Calls the NotificationsService.set in the remove function', async( () => {
    const fixture = TestBed.createComponent(NotificationItemComponent);
    const NIC = fixture.debugElement.componentInstance;
    const spy = spyOn(NIC.notificationService, 'set').and.stub();
    NIC.remove();
    expect(spy).toHaveBeenCalled();
  }));
});

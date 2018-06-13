import { async, TestBed } from '@angular/core/testing';
import { IconComponent } from './icon.component';

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

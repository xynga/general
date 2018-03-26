import { Component } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  icons = [
    'alert-lg',
    'alert-sm',
    'analysis' ,
    'arrow-down-red',
    'arrow-up-green',
    'call',
    'check',
    'chevron-down-green',
    'chevron-left-blue',
    'chevron-left-green',
    'chevron-right-blue',
    'chevron-right-grey',
    'close',
    'close-hover',
    'col-toggle',
    'contact',
    'conversion',
    'dashboard',
    'edit',
    'flyout-tab-left-blue',
    'flyout-tab-left-white-sm',
    'flyout-tab-top-white',
    'help',
    'help-sm',
    'helpful',
    'icon-forapproval',
    'icon-withoutlayout',
    'manage',
    'manage-layouts',
    'manage-tenants',
    'manage-vertex-users',
    'messages',
    'messages-lg',
    'no-layout',
    'notice',
    'notices',
    'page-forapproval-sm',
    'page-layoutrequests',
    'page-layoutsrejected',
    'page-withoutlayout-sm',
    'plus',
    'plus-white',
    'remove',
    'remove-hover',
    'reports',
    'search',
    'settings',
    'settings-hover',
    'star-filled',
    'star-hollow'
  ];

  options = {
    animate: 'fromBottom',
    timeOut: 10000,
    showProgressBar: true,
    pauseOnHover: true,
    lastOnBottom: false
  };

  myTitle = 'Sample Message';

  message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam bibendum, justo in gravida ultricies, ' +
    'odio enim rutrum erat, id rutrum libero libero sed libero. Sed et ligula ac justo fringilla tempus ac non ' +
    'sapien. In congue sodales diam, porta aliquet lectus pulvinar eu. In sed tellus eu felis ornare tempus. ' +
    'Suspendisse at lacus nec magna maximus lobortis in non quam.';

  public notificationsService: NotificationsService = new NotificationsService;

}

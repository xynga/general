import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getSuccessButton() {
    return element(by.cssContainingText('button', 'Success Notification'));
  }

  getAlertButton() {
    return element(by.cssContainingText('button', 'Alert Notification'));
  }

  getWarningButton() {
    return element(by.cssContainingText('button', 'Warning Notification'));
  }

  getInfoButton() {
    return element(by.cssContainingText('button', 'Info Notification'));
  }

  getSuccessNotification() {
    return element(by.css('.notification-item--success'));
  }

  getAlertNotification() {
    return element(by.css('.notification-item--alert'));
  }

  getWarningNotification() {
    return element(by.css('.notification-item--warn'));
  }

  getInfoNotification() {
    return element(by.css('.notification-item--info'));
  }

}

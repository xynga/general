import { AppPage } from './app.po';

describe('testing App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should create Success Notification', () => {
    page.navigateTo();
    page.getSuccessButton().click();
    const myElement = page.getSuccessNotification();
    expect(myElement.isPresent()).toBeTruthy();
  });

  it('should create Alert Notification', () => {
    page.navigateTo();
    page.getAlertButton().click();
    const myElement = page.getAlertNotification();
    expect(myElement.isPresent()).toBeTruthy();
  });


  it('should create Warning Notification', () => {
    page.navigateTo();
    page.getWarningButton().click();
    const myElement = page.getWarningNotification();
    expect(myElement.isPresent()).toBeTruthy();
  });


  it('should create Info Notification', () => {
    page.navigateTo();
    page.getInfoButton().click();
    const myElement = page.getInfoNotification();
    expect(myElement.isPresent()).toBeTruthy();
  });
});

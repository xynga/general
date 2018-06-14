import { async, TestBed } from '@angular/core/testing';
import { IconComponent } from '..';
import { ActionAlertComponent } from './action-alert.component';

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
    AAC.text = 'LimaOscarLima';
    fixture.detectChanges();
    expect(AAC.title).toEqual('135 LimaOscarLima');
  }));
});

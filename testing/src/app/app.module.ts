import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GeneralModule} from 'xynga-general';

import { AppComponent } from './app.component';
import { NotificationsService } from 'angular2-notifications';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GeneralModule
  ],
  providers: [NotificationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

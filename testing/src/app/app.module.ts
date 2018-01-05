import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GeneralModule} from 'xynga-general';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GeneralModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

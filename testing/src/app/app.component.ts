import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  icons = {
    'alert-lg':'<path d="M22.5 17.9L12.7.7a1.4 1.4 0 0 0-2.5 0L.5 17.9A1.4 1.4 0 0 0 1.7 20h19.6a1.4 1.4 0 0 0 1.2-2.1m-9.6-.7h-2.8v-2.9H13v2.9zm0-4.3h-2.8V7.1H13v5.7z" fill="#d1383b"/>'
  }

}

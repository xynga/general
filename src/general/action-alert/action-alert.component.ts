import {Component, Input, OnInit} from '@angular/core';

const SELECTOR = 'action-alert';

@Component({
  selector: SELECTOR,
  templateUrl: './action-alert.html',
  styleUrls: ['./action-alert.scss']

})

export class ActionAlertComponent implements OnInit {
  @Input() count: number = 0;
  @Input() icon: string;
  @Input() text: string;
  @Input() link: string;

  public title: string;

  public ngOnInit(): void {
    this.title = this.count + ' ' + this.text;
  }
}

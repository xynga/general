import {Component, Input} from '@angular/core';

const SELECTOR = 'icon';

@Component({
  selector: SELECTOR,
  templateUrl: './icon.html',
  styleUrls: ['./icon.scss']
})
export class IconComponent {
  @Input() icon: string;
}

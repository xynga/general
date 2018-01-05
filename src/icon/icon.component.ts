import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

const SELECTOR = 'icon';

@Component({
  selector: SELECTOR,
  templateUrl: './icon.html',
  styleUrls: ['./icon.scss']
})
export class IconComponent implements OnInit {
  @Input() icon: string;

  @ViewChild('svg') svg: ElementRef;

  icons = {
      'manage-vertex-users': '<path d="M16.1 7.2l.8.8a.7.7 0 0 1 0 .9l-8 7.9a.7.7 0 0 1-.9 0l-.8-.8a.7.7 0 0 1 0-.9l7.9-7.9a.7.7 0 0 1 .9 0"/><path d="M16.8 16.1l-.8.8a.7.7 0 0 1-.9 0l-7.9-8a.7.7 0 0 1 0-.9l.8-.8a.7.7 0 0 1 .9 0l7.9 7.9a.7.7 0 0 1 0 .9"/>'
  };

  ngOnInit() {
    this.svg.nativeElement.innerHTML = this.icons[this.icon];
  }

}

const Prism = require('prismjs');

require('prismjs/components/prism-typescript');

import {Directive, Input, AfterViewInit, ElementRef} from '@angular/core';

const SELECTOR: string = '[codeHighlight]';

@Directive({
  selector: SELECTOR,

})
export class CodeHighlightDirective implements AfterViewInit {
  @Input() codeHighlight: string = 'markup';

  public constructor(private elem: ElementRef) {
  }

  ngAfterViewInit(): void {
    let codeType = this.codeHighlight ? this.codeHighlight : 'markup';
    let htmlString = this.elem.nativeElement.textContent;

    const prismCode = Prism.highlight(htmlString, Prism.languages[codeType]);
    this.elem.nativeElement.innerHTML = prismCode;

  }
}

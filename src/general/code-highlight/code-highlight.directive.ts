import { Directive, Input, AfterViewInit, ElementRef } from '@angular/core';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-typescript';

const SELECTOR = '[codeHighlight]';

@Directive({
  selector: SELECTOR
})
export class CodeHighlightDirective implements AfterViewInit {
  @Input() codeHighlight: string = 'markup';

  public constructor(private elem: ElementRef) {
  }

  ngAfterViewInit(): void {
    const codeType = this.codeHighlight ? this.codeHighlight : 'markup';
    const htmlString = this.elem.nativeElement.textContent;
    this.elem.nativeElement.innerHTML = Prism.highlight(htmlString, Prism.languages[codeType]);
  }
}

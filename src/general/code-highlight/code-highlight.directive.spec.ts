import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { CodeHighlightDirective } from './code-highlight.directive';
import { GeneralModule } from '../general.module';

@Component({
  selector: 'app-mock-component',
  template: '<code codeHighlight>WELCOME TO CODE</code>'
})
export class MockComponent {}

@NgModule({
  declarations: [
    MockComponent
  ],
  imports: [
    GeneralModule
  ]
}) export class FakeModule {}

describe('Code Highlight Directive', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MockComponent,
        CodeHighlightDirective
      ]
    }).compileComponents();
  }));
  it('runs all options for CodeHighlightDirective', async ( () => {
    TestBed.compileComponents().then(() => {
      const fixture = TestBed.createComponent(MockComponent);
      const codeDir = fixture.debugElement.query(By.directive(CodeHighlightDirective));
      expect(codeDir).not.toBeNull();
    });
  }));
  it('runs ngAfterViewInit correctly with typescript as codehighlight', async ( () => {
    TestBed.compileComponents().then(() => {
      const fixture = TestBed.createComponent(MockComponent);
      const codeDir = fixture.debugElement.query(By.directive(CodeHighlightDirective));
      const dirInstance = codeDir.injector.get(CodeHighlightDirective);
      dirInstance.codeHighlight = 'typescript';
      const spy = jasmine.createSpy('ngAfterViewInit').and.callFake(function (){
        const codeType = this.codeHighlight ? this.codeHighlight : 'markup';
        expect(codeType).toEqual('typescript');
      });
      dirInstance.ngAfterViewInit();
    });
  }));
  it('runs ngAfterViewInit correctly with no set codehighlight', async ( () => {
    TestBed.compileComponents().then(() => {
      const fixture = TestBed.createComponent(MockComponent);
      const codeDir = fixture.debugElement.query(By.directive(CodeHighlightDirective));
      const dirInstance = codeDir.injector.get(CodeHighlightDirective);
      const spy = jasmine.createSpy('ngAfterViewInit').and.callFake(function (){
        const codeType = this.codeHighlight ? this.codeHighlight : 'markup';
        expect(codeType).toEqual('markup');
      });
      dirInstance.ngAfterViewInit();
    });
  }));
});

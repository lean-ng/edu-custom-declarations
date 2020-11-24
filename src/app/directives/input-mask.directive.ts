import {Directive, ElementRef, HostListener, Input, OnChanges, OnInit} from '@angular/core';
import * as RandExp from 'randexp';

@Directive({
  selector: 'input[inputMask]'
})
export class InputMaskDirective implements OnChanges, OnInit {

  @Input('inputMask')
  mask: string;

  private originalPlaceholder: string;
  private maskRegex: RegExp;
  private randomMinimalMatch: string;

  constructor(private elt: ElementRef<HTMLInputElement>) {
    this.originalPlaceholder = elt.nativeElement.placeholder ? elt.nativeElement.placeholder + ' - ' : '';
  }

  @HostListener('keypress', ['$event'])
  handleInput(ev: KeyboardEvent): void {
    // Build nextStr from current value plus key and filled with further valid data
    let nextStr = this.elt.nativeElement.value + ev.key;
    if (nextStr.length < this.randomMinimalMatch.length) {
      nextStr = nextStr + this.randomMinimalMatch.substr(nextStr.length);
    }

    const match = this.maskRegex.test(nextStr);
    if (!match) {
      ev.preventDefault();
    }
  }

  ngOnChanges(): void {
    this.maskRegex = new RegExp(this.mask);
    const randExp = new RandExp(this.maskRegex);
    randExp.max = 0;
    this.randomMinimalMatch = randExp.gen();
    this.elt.nativeElement.placeholder = `${this.originalPlaceholder}${this.randomMinimalMatch}`;
  }

  ngOnInit(): void {
    if (this.elt.nativeElement.type !== 'text') {
      throw Error('Directive inputMask must be applied to text input fields.');
    }
  }
}

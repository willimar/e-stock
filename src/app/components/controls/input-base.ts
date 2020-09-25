import { NgModel, FormControlName } from '@angular/forms';
import { OnInit, Input, ContentChild, AfterContentInit, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputBase implements OnInit, AfterContentInit {

  @Input() public caption: string;
  @Input() public errorMessage: string;
  @Input() public name: string;
  @Input() public required: boolean;

  @ContentChild(NgModel) model: NgModel;
  @ContentChild(FormControlName) control: FormControlName;

  input: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.input = this.model || this.control;

    if (this.input === undefined) {
      throw new Error('Field ngModel or FormControlName not assigned.');
    }
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched) && this.required;
  }

  hasError(): boolean {
    return !this.input.valid && (this.input.dirty || this.input.touched) && this.required;
  }

}

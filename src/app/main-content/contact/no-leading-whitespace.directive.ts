import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[noLeadingWhitespace]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NoLeadingWhitespaceDirective,
      multi: true,
    },
  ],
  standalone: true
})
export class NoLeadingWhitespaceDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value && value.startsWith(' ')) {
      return { leadingWhitespace: true };
    }
    return null;
  }
}
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { Directive } from '@angular/core';

export function phoneValidator (): ValidatorFn{
  return (control: AbstractControl) : ValidationErrors | null => {
    const hasUrl = /(http|https):\/\/([\w.]+\/?)\S*/.test(control.value);

    if(hasUrl) {
      return null;
    }

    return {originalUrl: true};
  }
}

@Directive({
  selector: '[appUrl]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: UrlValidatorDirective,
    multi: true
  }]
})
export class UrlValidatorDirective implements Validator{
  validate(control: AbstractControl): ValidationErrors | null {
    return phoneValidator()(control);
  }
}

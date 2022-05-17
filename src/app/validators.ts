import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

const forbiddenNamesArray: string[] = ['John', 'Stefan', 'Mike'];

export function fullNameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }

    let spaceIndex = control.value.trim().indexOf(' ');
    return spaceIndex > 0 ? null : { fullName: { value: true } };
  };
}

export function forbiddenNameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }

    return !!forbiddenNamesArray.includes(control.value)
      ? { isNameForbidden: { value: true } }
      : null;
  };
}

export function ageValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }

    return control.value >= 18 ? null : { legalAge: { value: true } };
  };
}

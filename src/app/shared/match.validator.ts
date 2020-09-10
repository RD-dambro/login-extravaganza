import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { FormGroup } from '@angular/forms';




export const passwordsMatchValidator: ValidatorFn = (control: FormGroup):
ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('password_repeat');
    //passwordToMatch.value;
    return (password.value !== confirmPassword.value) ? {matchError: true} : null;

}
import { ValidatorFn } from '@angular/forms';

export interface FlexFormField {
    name: string;
    label: string;
    type: 'text' | 'email' |'password';
    placeholder: string;
    validators?: ValidatorFn[]; 
};
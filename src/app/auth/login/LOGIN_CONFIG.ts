import { FlexFormConfig } from "../../collections/flex-form/flex-form-config";
import { Validators } from "@angular/forms";

export const LOGIN_CONFIG: FlexFormConfig = {
    title: 'Login to Your Account',
    subtitle: 'Welcome back! Please enter your details.',
    submitLabel: 'Login',
    fields: [
        { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email', validators: [Validators.required, Validators.email] },
        { name: 'password', label: 'Password', type: 'password', placeholder: '*******', validators: [Validators.required, Validators.minLength(6)]  }
    ]
};
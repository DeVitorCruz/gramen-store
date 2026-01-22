import { FlexFormConfig } from "../../collections/flex-form/flex-form-config";
import { Validators } from "@angular/forms";

export const REGISTER_CONFIG: FlexFormConfig = {
    title: 'Create Your Account',
    subtitle: 'Join us today! It\'s quick and easy.',
    submitLabel: 'Register',
    fields: [
        { name: 'name', label: 'full Name', type: 'text', placeholder: 'John Doe', validators: [Validators.required] },
        { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email', validators: [Validators.required, Validators.email] },
        { name: 'password', label: 'Password', type: 'password', placeholder: '*******', validators: [Validators.required, Validators.minLength(6)]  },
        { name: 'password_confirmation', label: 'Password confirmation', type: 'password', placeholder: '*******', validators: [Validators.required, Validators.minLength(6)]  },
    ]
};
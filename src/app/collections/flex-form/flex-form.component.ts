import { Component, inject, input, OnInit, Output, signal, EventEmitter } from '@angular/core';
import { FlexFormConfig } from './flex-form-config';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-flex-form',
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    MatInputModule
],
  templateUrl: './flex-form.component.html',
  styleUrl: './flex-form.component.scss'
})
export class FlexFormComponent implements OnInit {
  @Output() public submitted = new EventEmitter<any>();
  
  private readonly FB = inject(FormBuilder);
  public readonly CONFIG = input.required<FlexFormConfig>();
  public readonly FORM = signal<FormGroup | null>(null);
  public readonly ERROR_MESSAGE = signal<string>('');

  public ngOnInit(): void {
    const CONTROLS: Record<string, any> = {};

    this.CONFIG().fields?.forEach(field => {
      CONTROLS[field.name] = ['', field.validators || []];
    });

    this.FORM.set(this.FB.group(CONTROLS, {
      validators: this.passwordsMatchValidator
    }));
  }

  public onSubmit(): void {
    if (this.FORM()?.valid) {
      this.submitted.emit(this.FORM()?.value);
    } else {
      this.ERROR_MESSAGE.set('Please fill all required fields');
    }
  }

  private passwordsMatchValidator(group: AbstractControl): ValidationErrors | null {
    const PASSWORD = group.get('password')?.value;
    const CONFIRM = group.get('password_confirmation')?.value;

    return PASSWORD === CONFIRM? null : { passwordsMismatch: true };
  }
}

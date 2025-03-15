import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { OffboardingForm } from '../../models/offboarding-form.model';
import { COUNTRIES } from './COUNTRIES';

@Component({
  selector: 'app-offboarding-dialog',
  imports: [ReactiveFormsModule, MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './offboarding-dialog.component.html',
  styleUrl: './offboarding-dialog.component.css',
})
export class OffboardingDialogComponent {
  private dialogRef = inject(MatDialogRef) as MatDialogRef<OffboardingDialogComponent, OffboardingForm | null>;

  public countries = COUNTRIES;

  form = new FormGroup({
    receiver: new FormControl<string | null>(null, Validators.required),
    email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
    phone: new FormControl<string | null>(null, [Validators.required, Validators.pattern('^[0-9]+$')]),
    street: new FormControl<string | null>(null, Validators.required),
    city: new FormControl<string | null>(null, Validators.required),
    postalCode: new FormControl<string | null>(null, [Validators.required, Validators.pattern('^[0-9-]+$')]),
    country: new FormControl<string | null>(null, Validators.required),
    notes: new FormControl<string | null>(null),
  });

  confirm() {
    this.dialogRef.close(this.transformFormValuesToModel(this.form.value));
  }

  close() {
    this.dialogRef.close(null);
  }

  transformFormValuesToModel(values: FormValues): OffboardingForm {
    return {
      ...values,
      postalCode: Number(values.postalCode?.replace('-', '')),
      phone: Number(values.phone),
    } as OffboardingForm;
  }
}

type FormValues = typeof OffboardingDialogComponent.prototype.form.value;

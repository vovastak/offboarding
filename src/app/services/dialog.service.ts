import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { OffboardingDialogComponent } from '../components/offboarding-dialog/offboarding-dialog.component';
import { OffboardingForm } from '../models/offboarding-form.model';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private dialog = inject(MatDialog);

  openOffboardingDialog(): Observable<OffboardingForm> {
    const dialogRef = this.dialog.open(OffboardingDialogComponent, {
      width: '640px',
    });

    return dialogRef.afterClosed();
  }
}

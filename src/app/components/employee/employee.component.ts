import { Component, DestroyRef, inject, input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { Employee } from '../../models/employee.model';
import { DialogService } from '../../services/dialog.service';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-employee',
  imports: [MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent {
  private dialogService = inject(DialogService);
  private destroyRef = inject(DestroyRef);
  private store = inject(StoreService);
  private router = inject(Router);
  employee = input.required<Employee>();

  openOffboardingDialog() {
    this.dialogService
      .openOffboardingDialog()
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        switchMap((result) => this.store.offboardEmployee(this.employee().id, result)),
      )
      .subscribe(() => this.router.navigate(['/employees']));
  }
}

import { Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Employee } from '../../models/employee.model';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-employee',
  imports: [MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent {
  private dialogService = inject(DialogService);
  employee = input.required<Employee>();

  openOffboardingDialog() {
    this.dialogService.openOffboardingDialog().subscribe((result) => {
      if (result) {
        console.log('Offboarding confirmed:', result);
      } else {
        console.log('Offboarding canceled');
      }
    });
  }
}

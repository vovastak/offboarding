import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee',
  imports: [MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent {
  employee = input.required<Employee>();
}

import { Component, computed, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { Employee, Status } from '../../models/employee.model';

@Component({
  selector: 'app-employees-list',
  imports: [FormsModule, MatTableModule, MatInputModule, MatFormFieldModule],
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css',
})
export class EmployeesListComponent {
  private router = inject(Router);

  Status = Status;
  columns: (keyof Employee)[] = ['name', 'email', 'department', 'equipments', 'status'];

  employeesInput = input.required<Employee[] | null>({ alias: 'employees' });

  searchTerm = signal<string>('');
  employees = computed(() => {
    const employees = this.employeesInput() || [];
    const search = this.searchTerm().trim().toLowerCase();
    if (!search) return employees;

    return employees.filter(({ name, department }) => [name, department].join().toLowerCase().includes(search));
  });

  goToEmployee(employee: Employee) {
    this.router.navigate(['/employee', employee.id]);
  }
}

import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { ApiService } from './services/api.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'employees',
    pathMatch: 'full',
  },
  {
    path: 'employees',
    resolve: {
      employees: () => inject(ApiService).getEmployees(),
    },
    loadComponent: () =>
      import('./components/employees-list/employees-list.component').then((m) => m.EmployeesListComponent),
  },
  {
    path: 'employee/:id',
    loadComponent: () => import('./components/employee/employee.component').then((m) => m.EmployeeComponent),
  },
];

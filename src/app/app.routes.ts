import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Routes } from '@angular/router';
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
    resolve: {
      employee: (route: ActivatedRouteSnapshot) => inject(ApiService).getEmployeeById(route.params['id']),
    },
    loadComponent: () => import('./components/employee/employee.component').then((m) => m.EmployeeComponent),
  },
];

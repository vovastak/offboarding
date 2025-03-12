import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncPipe, EmployeesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private apiService = inject(ApiService);

  employees$ = this.apiService.getEmployees();
}

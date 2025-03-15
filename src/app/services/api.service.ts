import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
import { OffboardingForm } from '../models/offboarding-form.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);

  private baseUrl = 'http://localhost:3000';

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}/employees`);
  }

  getEmployeeById(id: string): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/employees/${id}`);
  }

  offboardUser(id: string, data: OffboardingForm): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/${id}/offboard`, data);
  }
}

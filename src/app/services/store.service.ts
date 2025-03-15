import { computed, inject, Injectable, signal } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Employee, Status } from '../models/employee.model';
import { OffboardingForm } from '../models/offboarding-form.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private apiService = inject(ApiService);

  private selectedId = signal<string | null>(null);
  private loadedEmployees = signal<Employee[]>([]);

  employees = computed(() =>
    this.loadedEmployees().map((e) => (e.id === this.selectedId() ? { ...e, status: Status.Offboarded } : e)),
  );

  loadEmployees(): Observable<Employee[]> {
    return this.apiService.getEmployees().pipe(tap((employees) => this.loadedEmployees.set(employees)));
  }

  offboardEmployee(id: string, data: OffboardingForm): Observable<void> {
    return this.apiService.offboardUser(id, data).pipe(
      catchError(() => of(null)),
      tap(() => this.selectedId.set(id)),
    );
  }
}

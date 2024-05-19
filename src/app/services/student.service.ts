import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Student } from '../type';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseURL: string = 'http://localhost:8000/student/';

  constructor(private apiService: ApiService) {}

  getStudents(): Observable<Student[]> {
    return this.apiService.get<Student[]>(this.baseURL);
  }
  getStudent(id: number): Observable<Student> {
    return this.apiService.get<Student>(`${this.baseURL}${id}`);
  }
  addStudent(body: Student): Observable<Student[]> {
    return this.apiService.post<Student[]>(this.baseURL, body);
  }
  editStudent(body: Student, id: number): Observable<Student[]> {
    return this.apiService.put<Student[]>(`${this.baseURL}${id}/`, body);
  }
  deleteStudent(id: number): Observable<Student[]> {
    return this.apiService.delete<Student[]>(`${this.baseURL}${id}`);
  }
}

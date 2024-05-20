import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Semester } from '../type';

@Injectable({
  providedIn: 'root'
})
export class SemesterService {
  private baseURL: string = "http://localhost:8000/semester/";
  
  constructor(private apiService: ApiService) { }

  getSemesters(): Observable<Semester[]> {
    return this.apiService.get<Semester[]>(this.baseURL);
  }
  getSemester(id: number): Observable<Semester> {
    return this.apiService.get<Semester>(`${this.baseURL}${id}`);
  }
  addSemester(body: Semester): Observable<Semester[]> {
    return this.apiService.post<Semester[]>(this.baseURL, body);
  }
  editSemester(body: Semester, id: number): Observable<Semester[]> {
    return this.apiService.put<Semester[]>(`${this.baseURL}${id}/`, body);
  }
  deleteSemester(id: number): Observable<Semester[]> {
    return this.apiService.delete<Semester[]>(`${this.baseURL}${id}`);
  }
}

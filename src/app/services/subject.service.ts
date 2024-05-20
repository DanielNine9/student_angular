import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Subject } from '../type';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  private baseURL: string = 'http://localhost:8000/subject/';

  constructor(private apiService: ApiService) {}

  getSubjects(): Observable<Subject[]> {
    return this.apiService.get<Subject[]>(this.baseURL);
  }
  getSubject(id: number): Observable<Subject> {
    return this.apiService.get<Subject>(`${this.baseURL}${id}`);
  }
  addSubject(body: any): Observable<Subject[]> {
    return this.apiService.post<Subject[]>(this.baseURL, body);
  }
  editSubject(body: any, id: number): Observable<Subject[]> {
    return this.apiService.put<Subject[]>(`${this.baseURL}${id}/`, body);
  }
  deleteSubject(id: number): Observable<Subject[]> {
    return this.apiService.delete<Subject[]>(`${this.baseURL}${id}`);
  }

  getSubjectBasedOnIdClassAndIdSemester(idClass: number, idSemester: number) {
    return this.apiService.get<Subject[]>(`${this.baseURL}filter-by-class-and-semester/?class_id=${idClass}&semester_id=${idSemester}`);
  }
}

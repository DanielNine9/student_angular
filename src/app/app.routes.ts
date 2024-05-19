import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClassesComponent } from './classes/classes.component';
import { StudentsComponent } from './students/students.component';
import { DetailClassComponent } from './detail-class/detail-class.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'classes',
    component: ClassesComponent,
  },
  {
    path: 'classes/:id',
    component: DetailClassComponent,
  },
  {
    path: 'students',
    component: StudentsComponent,
  },
  {
    path: 'students/:id',
    component: DetailStudentComponent,
  },
];

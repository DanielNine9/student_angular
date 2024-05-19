import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Class, Student } from '../../type';
import { StudentService } from '../../services/student.service';
import { ClassService } from '../../services/class.service';
import { CommonModule } from '@angular/common';
import { EditStudentComponent } from '../edit-student/edit-student.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-table-student',
  standalone: true,
  imports: [CommonModule, EditStudentComponent, RouterLink],
  templateUrl: './table-student.component.html',
  styleUrl: './table-student.component.css',
})
export class TableStudentComponent implements OnInit {
  students: Student[] = [];
  classes: Class[] = [];
  constructor(
    private studentService: StudentService,
    private classService: ClassService
  ) {}

  ngOnInit(): void {
    this.getStudents();
    this.getClasses();
  }

  
  private getClasses() {
    console.log("update")
    this.classService.getClasses().subscribe((data) => {
      this.classes = data;
    });
  }

  private getStudents() {
    this.studentService.getStudents().subscribe((data) => {
      this.students = data;
    });
  }

  onSubmit(student: Student) {
    this.studentService.addStudent(student).subscribe(
      () => {
        this.getStudents();
      },
      (error) => {
        alert(error?.error?.name);
      }
    );
  }
}

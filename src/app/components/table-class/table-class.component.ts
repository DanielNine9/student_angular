import { RouterLink } from '@angular/router';
import { Class, Semester } from './../../type';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditClassComponent } from '../edit-class/edit-class.component';
import { ClassService } from '../../services/class.service';
import { SemesterService } from '../../services/semester.service';

@Component({
  selector: 'app-table-class',
  standalone: true,
  imports: [CommonModule, EditClassComponent, RouterLink],
  templateUrl: './table-class.component.html',
  styleUrl: './table-class.component.css',
})
export class TableClassComponent implements OnInit {
  classes: Class[] = [];
  semesters: Semester[] = []
  @Output() updatedClass: EventEmitter<boolean> = new EventEmitter();

  constructor(private classService: ClassService, private semesterService: SemesterService) {}

  ngOnInit(): void {
    this.getClasses();

  }



  private getClasses() {
    this.classService.getClasses().subscribe((data) => {
      this.classes = data;
    });
  }

  onSubmit(data: any) {
    this.classService.addClass(data).subscribe(
      () => {
        this.getClasses();
        this.updatedClass.emit(true)
      },
      (error) => {
        alert(error?.error?.name);
      }
    );
  }
}

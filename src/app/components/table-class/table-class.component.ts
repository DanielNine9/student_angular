import { RouterLink } from '@angular/router';
import { Class } from './../../type';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditClassComponent } from '../edit-class/edit-class.component';
import { ClassService } from '../../services/class.service';

@Component({
  selector: 'app-table-class',
  standalone: true,
  imports: [CommonModule, EditClassComponent, RouterLink],
  templateUrl: './table-class.component.html',
  styleUrl: './table-class.component.css',
})
export class TableClassComponent implements OnInit {
  classes: Class[] = [];
  @Output() updatedClass: EventEmitter<boolean> = new EventEmitter();

  constructor(private classService: ClassService) {}

  ngOnInit(): void {
    this.getClasses();
  }

  private getClasses() {
    this.classService.getClasses().subscribe((data) => {
      this.classes = data;
    });
  }

  onSubmit(name: string) {
    this.classService.addClass({ name: name }).subscribe(
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

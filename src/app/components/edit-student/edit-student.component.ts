import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Class, Student } from '../../type';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClassService } from '../../services/class.service';

@Component({
  selector: 'app-edit-student',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css',
})
export class EditStudentComponent implements OnChanges {
  @Input() student: Student = {
    name: '',
    score: 0,
    school_class_name: '',
  };
  @Input() isAdd: boolean = true;
  @Input() classes: Class[] = [];
  @Output() cancel = new EventEmitter();
  @Output() submit = new EventEmitter();

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    score: new FormControl('', [
      Validators.required,
      Validators.min(0),
      Validators.max(100),
    ]),
    school_class_name: new FormControl('', [Validators.required]),
  });
  constructor(private classService: ClassService) {}

  ngAfterViewInit(): void {}

  onCancel() {
    this.cancel.emit(true);
    this.form.reset();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['student'] && changes?.['student'].currentValue) {
      this.form.patchValue({
        name: this.student.name,
        score: String(this.student.score),
        school_class_name: this.student.school_class_name,
      });
    }
    this.classService.getClasses().subscribe((data) => {
      this.classes = data;
    });
  }

  onSubmit() {
    this.submit.emit({
      name: this.fc.name.value,
      score: this.fc.score.value,
      school_class_name: this.fc.school_class_name.value,
    });
    this.form.reset();
  }

  get fc() {
    return this.form.controls;
  }

  get title(): string {
    if (this.isAdd) {
      return 'Add';
    } else return 'Edit';
  }
}

import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Class } from '../../type';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-edit-class',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-class.component.html',
  styleUrl: './edit-class.component.css',
})
export class EditClassComponent implements AfterViewInit, OnChanges {
  @Input() schoolClass: Class = {
    name: '',
  };
  @Input() isAdd: boolean = true;
  @Output() cancel = new EventEmitter();
  @Output() submit = new EventEmitter();

  @ViewChild('modal') modal: ElementRef | undefined;
  @ViewChild('nameInput', { static: false }) nameInput: ElementRef | undefined;

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });
  constructor(private fb: FormBuilder) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.["schoolClass"] && changes?.["schoolClass"].currentValue) {
      this.form.patchValue({
        name: this.schoolClass.name,
      });
    }
  }

  ngAfterViewInit(): void {}

  onCancel() {
    this.cancel.emit(true);
    this.form.reset();
  }

  onSubmit() {
    this.submit.emit(this.form.controls.name?.value);
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

  // check(event: any) {
  //   event.preventDefault();
  //   console.log(this.fc.name.touched);
  //   console.log(this.fc.name.errors);
  //   console.log(this.fc.name.invalid);
  // }
}

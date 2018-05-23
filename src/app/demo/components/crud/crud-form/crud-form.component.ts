import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormArray,
  FormBuilder,
  Validators,
} from '@angular/forms';



import { map } from 'rxjs/operators';

import { User} from '../../../../admin/models/user.model';






@Component({
  selector: 'crud-form',

 changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.css']
})
export class CrudFormComponent implements OnChanges{

  exists = false;

  @Input() user: User;
  @Input() rightContent;
  @Input() formType;

  @Input() formConfig:any;

  @Output() selected = new EventEmitter<number[]>();
  @Output() create = new EventEmitter<User>();
  @Output() update = new EventEmitter<User>();
  @Output() remove = new EventEmitter<User>();

  form = this.fb.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', Validators.required],
  });


  constructor(private fb: FormBuilder) {}


  get firstNameControl() {
    return this.form.get('firstName') as FormControl;
  }

  get firstNameControlInvalid() {
    return this.firstNameControl.hasError('required') && this.firstNameControl.touched;
  }


  ngOnChanges(changes: SimpleChanges) {
    if (this.rightContent == 'UpdateForm') {
      this.exists = true;
      this.form.patchValue(this.user);
    } 
    else if (this.rightContent == 'CreateForm')  {
      this.exists = false;
      this.form.reset();
    }
  }

  createUser(form: FormGroup) {
    const { value, valid } = form;
    if (valid) {
      this.create.emit(value);
      console.log('createUser from form comp'+value)
    }
  }

  updateUser(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.update.emit({ ...this.user, ...value });
      console.log('updateUser from form comp')
    }
  }

  removeUser(form: FormGroup) {
    const { value } = form;
    this.remove.emit({ ...this.user, ...value });
  }

}










import {
  DynamicFormControlModel,
  DynamicCheckboxModel,
  DynamicInputModel,
  DynamicRadioGroupModel
} from "@ng-dynamic-forms/core";

export const MY_FORM_MODEL: DynamicFormControlModel[] = [

  new DynamicInputModel({

      id: "sampleInput",
      label: "Sample Input",
      maxLength: 42,
      placeholder: "Sample input"
  }),

  new DynamicRadioGroupModel<string>({

      id: "sampleRadioGroup",
      label: "Sample Radio Group",
      options: [
          {
              label: "Option 1",
              value: "option-1",
          },
          {
              label: "Option 2",
              value: "option-2"
          },
          {
              label: "Option 3",
              value: "option-3"
          }
      ],
      value: "option-3"
  }),

  new DynamicCheckboxModel({

      id: "sampleCheckbox",
      label: "I do agree"
  })
];
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import {
  ageValidator,
  forbiddenNameValidator,
  fullNameValidator,
} from '../validators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  registrationForm = this.fb.group({
    name: [
      null,
      [Validators.required, fullNameValidator(), forbiddenNameValidator()],
    ],
    age: [null, [Validators.required, ageValidator()]],
    email: [null, [Validators.email, Validators.required]],
  });

  constructor(private fb: FormBuilder, private dataService: DataService) {}

  onSubmit() {
    if (this.registrationForm.invalid) {
      return;
    }

    this.dataService.dataTransfer.next(this.registrationForm.value);
    this.registrationForm.reset();
  }
}

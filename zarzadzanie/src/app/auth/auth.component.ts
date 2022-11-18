import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})

export class AuthComponent implements OnInit {
  @Output() onSubmitEvent = new EventEmitter();
  @Input() submitLabel: string;

  imie = new FormControl('', [Validators.required]);
  nazwisko = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  constructor() {}

  ngOnInit(): void {}

  getImieErrorMessage() {
    if (this.imie.hasError('required')) {
      return 'You must enter a value.';
    }

    return '';
  }

  getNazwiskoErrorMessage() {
    if (this.nazwisko.hasError('required')) {
      return 'You must enter a value.';
    }

    return '';
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value.';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'You must enter a value.';
    }

    return '';
  }

  onSubmit() {
    this.onSubmitEvent.emit({
      imie: this.imie.value,
      nazwisko: this.nazwisko.value,
      email: this.email.value,
      password: this.password.value,
    });
  }
  
}

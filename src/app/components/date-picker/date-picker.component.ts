import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  date = new FormControl(new Date());
  form: FormGroup;


  ngOnInit(): void {
    this.cargarFormulario();

  }

  cargarFormulario() {
    this.form = this.fb.group({
      fecha: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  consultarPagos(date) {
      console.log("este es la fecha",date);
  }

}

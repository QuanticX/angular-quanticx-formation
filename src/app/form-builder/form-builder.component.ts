import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

    profileForm = this.fb.group({
      firstName: [''],
      lastName: [''] 
    });
  constructor(private fb: FormBuilder) { }  onSubmit() {
    console.warn(this.profileForm.value);
  }


  ngOnInit() {
  }

}
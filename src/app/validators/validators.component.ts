import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-validators',
  templateUrl: './validators.component.html',
  styleUrls: ['./validators.component.css']
})
export class ValidatorsComponent implements OnInit {

  profileForm = this.fb.group({
    firstName: ['', Validators.required ],
    lastName: ['', Validators.required ] 
  });

  constructor(private fb: FormBuilder) { }  
  
  onSubmit() {
    console.warn(this.profileForm.value);
  }

  ngOnInit() {
  }

  
}
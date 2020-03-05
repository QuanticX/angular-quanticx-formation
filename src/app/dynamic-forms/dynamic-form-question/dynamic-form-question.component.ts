import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from "../dynamic-forms.component";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css']
})
export class DynamicFormQuestionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() question: QuestionBase<string>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }

}
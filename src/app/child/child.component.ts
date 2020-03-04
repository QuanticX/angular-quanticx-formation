import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() 
  greetMessage: string;
  @Output() 
  valueChange = new EventEmitter();
   counter = 0;    
   valueChanged() {
        this.counter = this.counter + 1;        
        this.valueChange.emit(this.counter);
    } 



}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
public operations:string[]=['+','-','*','/']
currentOperator:string = 'firstapp'

//For taking input number
num1:number = 100
num2:number = 200
  constructor() { }

  ngOnInit() {
  }

}

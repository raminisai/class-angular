import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-pipe',
  templateUrl: './built-in-pipe.component.html',
  styleUrls: ['./built-in-pipe.component.css']
})

export class BuiltInPipeComponent implements OnInit {
title:string= "buil in pipe"
public person:Person
  constructor() { }

  ngOnInit() {
    this.person = new Person();
    this.person = {
      name:"ammu",
      age:22,
      gender:"female"
    }
  }

}
class Person{
  name:string
  age:number
  gender:string
}

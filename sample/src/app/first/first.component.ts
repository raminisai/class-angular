import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent  {

  title = 'sample';
  cityName = 'hyderabad'
  state = 'Telangana'
  onclick(cityName,state){
    this.cityName = cityName
    this.state = state
    console.log(this.cityName,this.state);
  }

}

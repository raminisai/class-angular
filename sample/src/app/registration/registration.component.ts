import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public username: string;
  public pwd: string;
  public status:boolean;
  constructor() { }

  ngOnInit() {
  }
  public Registration(pStatus:any){
    this.status = true
    pStatus.style = "color:green"
    console.log(pStatus)
  }

}

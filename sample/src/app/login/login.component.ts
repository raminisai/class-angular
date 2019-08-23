import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public username: string;
public pwd: string;
public loginStatus:string;
public status:boolean = true
  constructor() { }

  ngOnInit() {
  }
  public Login(log:any,img:any){
    if(this.username =="admin" && this.pwd =="ammu"){
      this.loginStatus = "login successful"
      this.status=!this.status
      log.disabled=true
      img.src="../../assets/giphy-2.gif"
    }
    else this.loginStatus = "login failed";
  }

}

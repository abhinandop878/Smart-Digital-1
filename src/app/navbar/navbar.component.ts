import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  Name=""
  MobileNo=""
  Email=""
  Username=""
  Password=""

  readRegister=()=>{
    let data={
      "Name":this.Name,
      "MobileNo":this.MobileNo,
      "Email":this.Email,
      "Username":this.Username,
      "Password":this.Password
    }
    console.log(data)
  }
  ngOnInit(): void {
  }

}

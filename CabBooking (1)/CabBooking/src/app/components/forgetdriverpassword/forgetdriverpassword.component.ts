import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DriverDetails } from 'src/app/models/driverdetails';

@Component({
  selector: 'app-forgetdriverpassword',
  templateUrl: './forgetdriverpassword.component.html',
  styleUrls: ['./forgetdriverpassword.component.css']
})
export class ForgetdriverpasswordComponent implements OnInit {
  constructor(private router:Router){

  }
  public driverdetails=new DriverDetails;
  ngOnInit(): void {
    
  }
  OnSubmit(form:NgForm){
    if(form.valid){
      if(this.driverdetails.password == this.driverdetails.cpassword){
        this.router.navigateByUrl('/driversuccessreset');
      }
      else{
        alert("Password not matched!!!");
      } 
    }
  }
  

}

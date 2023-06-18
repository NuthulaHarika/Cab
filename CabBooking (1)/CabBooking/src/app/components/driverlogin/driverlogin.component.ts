import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DriverDetails } from 'src/app/models/driverdetails';
import { DriverdetailsService } from 'src/app/services/driverdetails.service';

@Component({
  selector: 'app-driverlogin',
  templateUrl: './driverlogin.component.html',
  styleUrls: ['./driverlogin.component.css']
})
export class DriverloginComponent implements OnInit{
  constructor(private router:Router,private service:DriverdetailsService){

  }
  public driverdetails=new DriverDetails;
  ngOnInit(): void {
    
  }
  OnSubmit(driverdetails){
    this.service.verifylogin(this.driverdetails).subscribe((res:any)=>{
      console.log("hello");
     console.log('res',res);
     localStorage.setItem('token',res.token);
     this.router.navigateByUrl('/driver');
    console.log(this.driverdetails);
    this.service.Driverinfo=this.driverdetails;
   },
   (error)=>{
     alert("invalid credentials");
   
   }
   )
 
}
}

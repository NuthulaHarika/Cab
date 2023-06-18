import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/models/userdetails';
import { DriverdetailsService } from 'src/app/services/driverdetails.service';
import { UserdetailsService } from 'src/app/services/userdetails.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit{
 public details: any;
  public userdetails=new UserDetails;
  public inside:boolean=false;
  constructor(private router:Router,private service:UserdetailsService,private service1:DriverdetailsService){
 }
public check:any;

  ngOnInit(): void {
    
  }
  OnSubmit(userdetails){
     this.service.verifylogin(this.userdetails).subscribe((res:any)=>{
   console.log("hello");
  console.log('res',res);
  localStorage.setItem('token',res.token);
  
  
  this.router.navigateByUrl('/user');
},
(error)=>{
  alert("invalid credentials");

}
)
//if(this.service1.notify)
//{
  //alert("your ride is booked");
//}
console.log(this.service1.notify);
}

  }

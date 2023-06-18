import { compileDeclareNgModuleFromMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { DriverDetails } from 'src/app/models/driverdetails';
import { UserDetails } from 'src/app/models/userdetails';
import { DriverdetailsService } from 'src/app/services/driverdetails.service';
import { UserdetailsService } from 'src/app/services/userdetails.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit{
  constructor(private service:UserdetailsService,private fb: FormBuilder,private service1:DriverdetailsService){

  }
  ngOnInit(): void {
    this.getBookingDetails();  
    
  }
  info
  userdetails
  details
 public  driverdetails=new DriverDetails;

  
  
  getBookingDetails() {
    this.service.getBookingDetails().subscribe(data=>{
      this.userdetails=data;
  })
   }
 public registerForm= this.fb.group({})

  
  Accept:boolean=false;
  Reject:boolean=false;
  

  getcabdetails(fare){
    this.service.getcab(fare).subscribe(data=>{
      this.details=data;
      this.details.status="approved";
      console.log(this.details);
      this.service.OnAccept(fare,this.details).subscribe({})
      
    })
  }
    
  getcabinfo(fare){
    this.service.getcab(fare).subscribe(data=>{
      this.details=data;
      this.details.status="rejected";
     // console.log(this.details);
      this.service.OnAccept(fare,this.details).subscribe({})
      
    })
  }
  onReject(fare)
  {
     this.getcabinfo(fare);
  }

  onAccept(fare){
    this.getcabdetails(fare);
  
  this.service1.notify=true;
 
  this.service1.Driver=this.service1.Driverinfo
  console.log(this.service1.Driver);
  //console.log(this.service1.notify);
  console.log(this.service1.driverdetails.driverId);
   
  }
}


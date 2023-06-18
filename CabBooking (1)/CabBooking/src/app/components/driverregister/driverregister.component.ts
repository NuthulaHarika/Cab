import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DriverDetails } from 'src/app/models/driverdetails';
import { DriverdetailsService } from 'src/app/services/driverdetails.service';

@Component({
  selector: 'app-driverregister',
  templateUrl: './driverregister.component.html',
  styleUrls: ['./driverregister.component.css']
})
export class DriverregisterComponent implements OnInit {
  constructor(private router:Router,private service:DriverdetailsService){

  }
  public driverdetails=new DriverDetails;
  ngOnInit(): void {
    
  }
  OnSubmit(form:NgForm){
    if(form.valid){
      this.service.addDriverdetails(this.driverdetails).subscribe();
      this.router.navigateByUrl('/driversuccessregister');
    }
    else{
      alert("Invalid details!!!");
    }
  }

}

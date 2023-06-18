import { Component, OnInit } from '@angular/core';
import { DriverDetails } from 'src/app/models/driverdetails';
import { DriverdetailsService } from 'src/app/services/driverdetails.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent  implements OnInit{
  constructor(private service:DriverdetailsService){}
  id;
 driverinfo;
 public 
  ngOnInit(): void {
    this.id=this.service.Driver.driverId;
    console.log(this.service.Driver);
    console.log(this.id);
    this.service.getDriver(this.id).subscribe(data=>{
     this.driverinfo=data
     console.log(this.driverinfo);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { DriverdetailsService } from 'src/app/services/driverdetails.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit{
  constructor(private service1:DriverdetailsService){}
  ngOnInit(): void {
  
  }

}

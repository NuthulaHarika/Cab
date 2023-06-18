import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from 'src/app/services/userdetails.service';

@Component({
  selector: 'app-usermybookings',
  templateUrl: './usermybookings.component.html',
  styleUrls: ['./usermybookings.component.css']
})
export class UsermybookingsComponent implements OnInit {
  constructor(private service:UserdetailsService){

  }
  public status:String;
  public Accept:boolean
  public userdetails: any;
  ngOnInit(): void {
    this.getDetails();
   this.Accept=this.service.Accept
  }
  getDetails(){
    this.service.getBookingDetails().subscribe(data=>{
      this.userdetails=data;
    })
  }
  

}


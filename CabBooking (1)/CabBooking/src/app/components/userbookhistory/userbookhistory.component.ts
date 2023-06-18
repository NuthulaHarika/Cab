import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from 'src/app/services/userdetails.service';

@Component({
  selector: 'app-bookhistory',
  templateUrl: './bookhistory.component.html',
  styleUrls: ['./bookhistory.component.css']
})
export class BookhistoryComponent implements OnInit {
  constructor(private service:UserdetailsService){

  }
  public userdetails: any;
  ngOnInit(): void {
    this.getBookingDetails();
  }
  getBookingDetails(){
    this.service.getBookingDetails().subscribe(data=>{

    })
  }


}

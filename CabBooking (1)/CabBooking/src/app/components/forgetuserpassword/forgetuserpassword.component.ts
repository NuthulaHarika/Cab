import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/models/userdetails';

@Component({
  selector: 'app-forgetuserpassword',
  templateUrl: './forgetuserpassword.component.html',
  styleUrls: ['./forgetuserpassword.component.css']
})
export class ForgetuserpasswordComponent implements OnInit{
  constructor(private router:Router){

  }
  public userdetails=new UserDetails;
  ngOnInit(): void {
    
  }
  OnSubmit(form:NgForm){
    if(form.valid){
      if(this.userdetails.password == this.userdetails.cpassword){
        this.router.navigateByUrl('/usersuccessreset');
      }
      else{
        alert("Password not matched!!!");
      } 
    }
    else{
      alert("Invalid details!!!");
    }
  }

}

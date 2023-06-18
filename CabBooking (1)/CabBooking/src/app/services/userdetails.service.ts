import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDetails } from '../models/userdetails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
  public Accept:boolean=false;
  public userdetails=new UserDetails;
  requestHeader=new HttpHeaders({"No-Auth":"True"});
  
  constructor(private http:HttpClient) { }
  getBookingDetails(){
    return this.http.get('http://localhost:8080/getUser');
  }
  addBookingDetails(userdetails: any){
    return this.http.post('http://localhost:8080/addUser', userdetails);
  }
  // removeDetails(id: any){
  //   return this.http.delete(`http://localhost:3000/userdetails/${id}`)
  // }
  adduserdetails(userdetails:any){
    return this.http.post('http://localhost:8082/addUserRegister', userdetails);
  }
  getdetails(){
    return this.http.get('http://localhost:8082/getUserRegister',{responseType:'text'});
  }
  OnAccept(fare,userdetails){
    return this.http.put(`http://localhost:8080/updateUser/${fare}`,userdetails)
  }
  verifylogin(userdetails){
    return this.http.post('http://localhost:8082/userlogin', userdetails,{responseType:'text'});
  }
  getcab(fare)
  {
    return this.http.get(`http://localhost:8080/getUser/${fare}`);
  }
}









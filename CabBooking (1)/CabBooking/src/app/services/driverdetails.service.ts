import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DriverDetails } from '../models/driverdetails';

@Injectable({
  providedIn: 'root'
})
export class DriverdetailsService {

 public notify:boolean;
 public Driverinfo:any;
 public Driver:any;
  public driverdetails=new DriverDetails;
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
  addDriverdetails(userdetails:any){
    return this.http.post('http://localhost:8082/addDriverRegister', userdetails);
  }
  getDriverdetails(){
    return this.http.get('http://localhost:8082/getDriverRegister',{responseType:'text'});
  }
  verifylogin(userdetails){
    return this.http.post('http://localhost:8082/Driverlogin', userdetails,{responseType:'text'});
  }
  getcab(fare)
  {
    return this.http.get(`http://localhost:8080/getUser/${fare}`);
  }
  getDriver(driverId){
    return this.http.get(`http://localhost:8082/getDriver/${driverId}`);
  }
}



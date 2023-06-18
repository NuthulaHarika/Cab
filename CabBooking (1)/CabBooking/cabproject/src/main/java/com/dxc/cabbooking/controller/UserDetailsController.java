package com.dxc.cabbooking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dxc.cabbooking.model.UserDetails;
import com.dxc.cabbooking.service.UserDetailsService;

   @RestController
   @CrossOrigin(origins="http://localhost:4200/")
	public class UserDetailsController {
		@Autowired
		UserDetailsService service;
		ResponseEntity response;
		boolean flag;
		String jwtToken;
		@PostMapping("/addUserDetails")
		public ResponseEntity<?> addUserDetails(@RequestBody UserDetails userdetails){
			flag=service.addUserDetails(userdetails);
			if(flag) {
				response=new ResponseEntity<String>("UserDeatils Object created",HttpStatus.CREATED);
			}
			else {
				response=new ResponseEntity<String>("UserDetails Object Failed",HttpStatus.BAD_REQUEST);
			}
			return response;
		}
		@GetMapping("/userDetails")
		public ResponseEntity<?> getUserDetails(@RequestBody UserDetails customer){
			List<UserDetails> userDetailsList=service.getAllUserDetails();
			if(userDetailsList!=null) {
				response=new ResponseEntity<List<UserDetails>>(userDetailsList,HttpStatus.OK);
			}
			else {
				response=new ResponseEntity<String>("UserDetails Object Failed",HttpStatus.BAD_REQUEST);
			}
			return response;
		}

	}




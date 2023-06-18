package com.dxc.cabbooking.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dxc.cabbooking.dao.UserDetailsDao;
import com.dxc.cabbooking.model.UserDetails;


@Service
public class UserDetailsService {
	@Autowired
	UserDetailsDao dao;
	public boolean addUserDetails(UserDetails u) {
		UserDetails userdetails=dao.insert(u);
		if(userdetails!=null) {
			return true;
		}
		return false;
	}
	public List<UserDetails> getAllUserDetails(){
		return dao.findAll();
	}

}


package com.dxc.cabbooking.dao;


import org.springframework.data.mongodb.repository.MongoRepository;


import com.dxc.cabbooking.model.UserDetails;

public interface UserDetailsDao extends MongoRepository<UserDetails,Integer > {

}

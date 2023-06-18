package com.dxc.cabbooking.model;



import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;






@Document
public class UserDetails {
	private String source;
	private String destination;
	private String carsize;
	private String carmodel;
	@Id
	private int fare;
	public UserDetails() {
		
	}
	public UserDetails(String source, String destination, String carsize, String carmodel, int fare) {
		this.source = source;
		this.destination = destination;
		this.carsize = carsize;
		this.carmodel = carmodel;
		this.fare = fare;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	public String getCarsize() {
		return carsize;
	}
	public void setCarsize(String carsize) {
		this.carsize = carsize;
	}
	public String getCarmodel() {
		return carmodel;
	}
	public void setCarmodel(String carmodel) {
		this.carmodel = carmodel;
	}
	public int getFare() {
		return fare;
	}
	public void setFare(int fare) {
		this.fare = fare;
	}
	@Override
	public String toString() {
		return "UserDetails [source=" + source + ", Destination=" + destination + ", carsize=" + carsize + ", carmodel="
				+ carmodel + ", fare=" + fare + "]";
	}
	
	
	

}



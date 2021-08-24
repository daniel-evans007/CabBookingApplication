package com.cg.mts.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

/**
 * @author Bikramjit
 *
 */
@Entity
@Table(name="trip")
public class TripBooking {
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "trip_Sequence")
    @SequenceGenerator(name = "trip_Sequence", sequenceName = "TRIP_SEQ", initialValue = 100001)
	private int tripBookingId;
	
	@OneToOne(cascade =  CascadeType.ALL)
	@JoinColumn(name = "customerId")
	private Customer customer;
	
	@OneToOne(cascade =  CascadeType.ALL)
	@JoinColumn(name = "driverId")
	private Driver driver;
	
	private String fromLocation;
	private String toLocation;
	private String fromDateTime;
	private String toDateTime;
	private String status;
	private float distanceInKm;
	private float bill;
	
	public TripBooking() {
		super();
	}

	public TripBooking(int tripBookingId, Customer customer, Driver driver, String fromLocation, String toLocation,
			String fromDateTime, String toDateTime, String status, float distanceInKm, float bill) {
		super();
		this.tripBookingId = tripBookingId;
		this.customer = customer;
		this.driver = driver;
		this.fromLocation = fromLocation;
		this.toLocation = toLocation;
		this.fromDateTime = fromDateTime;
		this.toDateTime = toDateTime;
		this.status = status;
		this.distanceInKm = distanceInKm;
		this.bill = bill;
	}

	public int getTripBookingId() {
		return tripBookingId;
	}

	public void setTripBookingId(int tripBookingId) {
		this.tripBookingId = tripBookingId;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public Driver getDriver() {
		return driver;
	}

	public void setDriver(Driver driver) {
		this.driver = driver;
	}

	public String getFromLocation() {
		return fromLocation;
	}

	public void setFromLocation(String fromLocation) {
		this.fromLocation = fromLocation;
	}

	public String getToLocation() {
		return toLocation;
	}

	public void setToLocation(String toLocation) {
		this.toLocation = toLocation;
	}

	public String getFromDateTime() {
		return fromDateTime;
	}

	public void setFromDateTime(String fromDateTime) {
		this.fromDateTime = fromDateTime;
	}

	public String getToDateTime() {
		return toDateTime;
	}

	public void setToDateTime(String toDateTime) {
		this.toDateTime = toDateTime;
	}

	public String isStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public float getDistanceInKm() {
		return distanceInKm;
	}

	public void setDistanceInKm(float distanceInKm) {
		this.distanceInKm = distanceInKm;
	}

	public float getBill() {
		return bill;
	}

	public void setBill(float bill) {
		this.bill = bill;
	}
}
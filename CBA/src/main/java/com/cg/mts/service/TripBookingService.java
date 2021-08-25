package com.cg.mts.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.cg.mts.entities.Cab;
import com.cg.mts.entities.Customer;
import com.cg.mts.entities.TripBooking;
import com.cg.mts.exception.CabNotFoundException;
import com.cg.mts.exception.CustomerNotFoundException;
import com.cg.mts.exception.TripBookingNotFoundException;
import com.cg.mts.repository.ICustomerRepository;
import com.cg.mts.repository.ITripBookingRepository;

/**
 * @author Biramjit
 *
 */
@Service
public class TripBookingService implements ITripBookingService{
	

	@Autowired
	private ITripBookingRepository iTripBookingRepository;
	
	@Autowired
	private ICustomerRepository iCustomerRepository;
	
	@Override
	public TripBooking insertTripBooking(TripBooking tripBooking) {
		// TODO Auto-generated method stub
		return this.iTripBookingRepository.save(tripBooking);
	}
	
	@Override
	public TripBooking updateTripBooking(TripBooking tripBooking, int id) {
		// TODO Auto-generated method stub
		
		  TripBooking trip = iTripBookingRepository.findById(id).orElseThrow(()-> new TripBookingNotFoundException("Trip not found"));
		  
		  trip.setDriver(tripBooking.getDriver());
		  trip.setDistanceInKm(tripBooking.getDistanceInKm());
		  trip.setBill(tripBooking.getBill());
		  trip.setFromDateTime(tripBooking.getFromDateTime());
		  trip.setToDateTime(tripBooking.getToDateTime());
		  trip.setFromLocation(tripBooking.getFromLocation());
		  trip.setToLocation(tripBooking.getToLocation());
		  trip.setStatus(tripBooking.getStatus());
		 
		  return iTripBookingRepository.save(trip);
	}

	@Override
	public ResponseEntity<String> deleteTripBooking(int id) {
		// TODO Auto-generated method stub
		Optional<TripBooking> tripBooking = iTripBookingRepository.findById(id);
		if (tripBooking.isPresent()) {
			iTripBookingRepository.deleteById(id);
			return new ResponseEntity<>("Trip deleted",HttpStatus.OK);
		} else
			throw new TripBookingNotFoundException("trip not found");
	}

	@Override
	public List<TripBooking> viewAllTripsCustomer(long customerId) {
		// TODO Auto-generated method stub
		List<TripBooking> tripList = new ArrayList<TripBooking>();
		
		for(TripBooking trip : iTripBookingRepository.findAll()) {
			if (trip.getCustomer().getCustomerId() == customerId) {
				tripList.add(trip);
			}
		}
		
		if(tripList.size()>0) {
			return tripList;
		}else {
			throw new CustomerNotFoundException("Customer Not Found");
		}
	}

	@Override
	public String calculateBill(long customerId) {
		// TODO Auto-generated method stub
		List<TripBooking> tripList = new ArrayList<TripBooking>();
		for(TripBooking trip : iTripBookingRepository.findAll()) {
			if (trip.getCustomer().getCustomerId() == customerId) {
				tripList.add(trip);
			}
		}
		
		if(tripList.size()>0) {
			int size = tripList.size() - 1;
			String bill = "Total bill is: "+tripList.get(size).getBill();
			return bill;
		}else {
			throw new CustomerNotFoundException("Customer Not Found");
		}
	}

	@Override
	public Optional<TripBooking> getTripById(int id) {
		return iTripBookingRepository.findById(id);
	}

	@Override
	public Optional<TripBooking> getTripByStatus() {
		String status = "notAccepted";
		return iTripBookingRepository.findTripByStatus(status);
	}

}

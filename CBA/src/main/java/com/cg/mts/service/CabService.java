package com.cg.mts.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.cg.mts.entities.Cab;
import com.cg.mts.exception.CabNotFoundException;
import com.cg.mts.repository.ICabRepository;

/**
 * @author Debajyoti
 *
 */
@Service
public class CabService implements ICabService{

	@Autowired
	private ICabRepository iCabRepository;

	@Override
	public Cab insertCab(Cab cab) {
		// TODO Auto-generated method stub
		return iCabRepository.save(cab);
	}

	@Override
	public Cab updateCab(Cab cab, int id) {
		// TODO Auto-generated method stub
		
		  Cab cb = null; 
		  cb = iCabRepository.findById(id).orElseThrow(()->new CabNotFoundException()); 
		  cb.setCarType(cab.getCarType());
		  cb.setPerKmRate(cab.getPerKmRate()); 
		  return iCabRepository.save(cb);

	}

	@Override
	public ResponseEntity<String> deleteCab(int id) {
		// TODO Auto-generated method stub
		Cab cb = iCabRepository.findById(id).orElseThrow(()->new CabNotFoundException());
		iCabRepository.deleteById(cb.getCabId());
		return new ResponseEntity<>("Cab deleted",HttpStatus.OK);
	}
	
	@Override
	public List<Cab> viewCabsOfType(String carType) {
		// TODO Auto-generated method stub
		return iCabRepository.findByCarType(carType);
	}

	@Override
	public int countCabsOfType(String carType) {
		// TODO Auto-generated method stub
		return iCabRepository.findByCarType(carType).size();
	}

}

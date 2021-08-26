package com.cg.mts.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.cg.mts.entities.Driver;
import com.cg.mts.exception.CredentialMissmatchException;
import com.cg.mts.exception.DriverNotFoundException;
import com.cg.mts.exception.UserNotLoginException;
import com.cg.mts.repository.IDriverRepository;

/**
 * @author Shrijit
 *
 */
@Service
public class DriverService implements IDriverService{

	@Autowired
	private IDriverRepository iDriverRepository;
	static int flag=0;
	
	@Override
	public Driver insertDriver(Driver driver) {
		// TODO Auto-generated method stub

		if(iDriverRepository.findByEmail(driver.getEmail()) >0){
			throw new CredentialMissmatchException();
		}else {
			this.iDriverRepository.save(driver); 
			return driver;
		}
	}

	public Driver loginDriver(Driver driver) {
		
		if(iDriverRepository.findByEmailAndPassword(driver.getEmail(), driver.getPassword()) == 1) {
			flag = 1;
			return iDriverRepository.findByEmailDriver(driver.getEmail());
		}else {
			throw new CredentialMissmatchException();
		}
	}
	
	@Override
	public Driver updateDriver(Driver driver,long id) {
		// TODO Auto-generated method stub
		if(flag == 1) {
			Driver dvr = null;
			dvr = iDriverRepository.findById(id).orElseThrow(()-> new DriverNotFoundException("Driver not found"));
			dvr.setUsername(driver.getUsername());
			dvr.setEmail(driver.getEmail());
			dvr.setPassword(driver.getPassword());
			dvr.setLicenseNo(driver.getLicenseNo());
			dvr.setRating(driver.getRating());
			dvr.setCab(driver.getCab());
			return iDriverRepository.save(dvr);
		}else {
			throw new UserNotLoginException();
		}
	}

	@Override
	public ResponseEntity<Driver> deleteDriver(long id) {
			Driver dvr1 = null;
			dvr1 = iDriverRepository.findById(id).orElseThrow(()-> new DriverNotFoundException("Driver not found"));
			this.iDriverRepository.delete(dvr1);
			return ResponseEntity.ok().build();
	}

	@Override
	public List<Driver> viewBestDrivers() {
		// TODO Auto-generated method stub
		if(flag == 1) {
			return iDriverRepository.findByRating(4.5f);
		}else {
			throw new UserNotLoginException();
		}
	}

	@Override
	public Driver viewDriver(long id) {
		// TODO Auto-generated method stub
		if(flag == 1) {
			Driver dvr = iDriverRepository.findById(id).orElseThrow(()-> new DriverNotFoundException("Driver not found"));
			return dvr;
		}else {
			throw new UserNotLoginException();
		}
	}

	@Override
	public Driver getDriver(String email) {
		if (flag == 1 || flag == 0) {
			return iDriverRepository.findByEmailDriver(email);
		}
		else {
			throw new UserNotLoginException();
		}
	}

	@Override
	public List<Driver> getAllDrivers() {
		List<Driver> allDrivers = iDriverRepository.findAll();
		return allDrivers;
	}

}
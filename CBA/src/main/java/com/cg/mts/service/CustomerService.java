package com.cg.mts.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.cg.mts.entities.Customer;
import com.cg.mts.exception.CredentialMissmatchException;
import com.cg.mts.exception.CustomerNotFoundException;
import com.cg.mts.exception.UserNotLoginException;
import com.cg.mts.repository.ICustomerRepository;

/**
 * @author Anirban
 *
 */
@Service
public class CustomerService implements ICustomerService{
	
	@Autowired
	private ICustomerRepository customerRepository;
	static int flag=0;

	@Override
	public Customer insertCustomer(Customer customer) {
		
		if(customerRepository.findByEmail(customer.getEmail()) >0){
			throw new CredentialMissmatchException();
		}else {
			this.customerRepository.save(customer); 
			return customer; 
		}
	}

	public Customer loginUser(Customer customer) {
		
		if(customerRepository.findByEmailAndPassword(customer.getEmail(), customer.getPassword()) == 1) {
			flag = 1;
			return customerRepository.findByEmailCustomer(customer.getEmail());
		}else {
			throw new CredentialMissmatchException();
		}
	}
	
	@Override
	public Customer updateCustomer(Customer customer, long id) {
		if(flag == 1) {
			Customer cust = (Customer) customerRepository.findById(id).orElseThrow(()-> new CustomerNotFoundException("Customer not found"));
			cust.setUsername(customer.getUsername());
			cust.setEmail(customer.getEmail());
			cust.setPassword(customer.getPassword());
			cust.setMobileNumber(customer.getMobileNumber());
			return (Customer) this.customerRepository.save(cust);
		}else {
			throw new UserNotLoginException();
		}
	}

	@Override
	public ResponseEntity<Customer> deleteCustomer(long id) {
		if(flag == 1) {
			Customer cust = (Customer) customerRepository.findById(id).orElseThrow(()-> new CustomerNotFoundException("Customer not found"));
			this.customerRepository.delete(cust);
			return ResponseEntity.ok().build();
		}else {
			throw new UserNotLoginException();
		}
	}

	@Override
	public List<Customer> viewCustomers() {
		// TODO Auto-generated method stub
		if(flag == 1) {
			List<Customer> customerList = customerRepository.findAll();
			return customerList;
		}else {
			throw new UserNotLoginException();
		}
	}

	@Override
	public Customer viewCustomer(long customerId) {
		// TODO Auto-generated method stub
		if(flag == 1) {
			return customerRepository.findById(customerId).orElseThrow(()-> new CustomerNotFoundException("Customer not found"));
		}else {
			throw new UserNotLoginException();
		}
	}

	@Override
	public Customer validateCustomer(String username, String password) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Customer getCustomer(String email) {
		// TODO Auto-generated method stub
		if(flag == 1 || flag == 0) {
			return customerRepository.findByEmailCustomer(email);
		}else {
			throw new UserNotLoginException();
		}
	}

}
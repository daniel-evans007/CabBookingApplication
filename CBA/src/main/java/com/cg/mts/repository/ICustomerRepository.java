package com.cg.mts.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cg.mts.entities.Customer;

@Repository
public interface ICustomerRepository extends JpaRepository<Customer, Long>{

	@Query("select COUNT(c) from Customer c where c.email =:email")
	int findByEmail(@Param("email")String email);
	
	@Query("select COUNT(c) from Customer c where c.email =:email and c.password=:password")
	int findByEmailAndPassword(@Param("email")String email,@Param("password")String password);
}
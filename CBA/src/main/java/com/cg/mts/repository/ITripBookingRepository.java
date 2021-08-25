package com.cg.mts.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cg.mts.entities.TripBooking;

@Repository
public interface ITripBookingRepository extends JpaRepository<TripBooking, Integer>{
	
	@Query("select t from TripBooking t where t.status =:status")
	Optional<TripBooking> findTripByStatus(@Param("status") String status);
} 
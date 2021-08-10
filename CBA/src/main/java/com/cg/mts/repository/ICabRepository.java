package com.cg.mts.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.mts.entities.Cab;

@Repository
public interface ICabRepository extends JpaRepository<Cab, Integer>{

	List<Cab> findByCarType(String carType);
}
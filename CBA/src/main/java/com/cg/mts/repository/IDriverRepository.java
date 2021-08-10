package com.cg.mts.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cg.mts.entities.Driver;

@Repository
public interface IDriverRepository extends JpaRepository<Driver, Long>{

	@Query("select d from Driver d where d.rating >=:rating")
	List<Driver> findByRating(@Param("rating")float rating);
	
	@Query("select COUNT(d) from Driver d where d.email =:email")
	int findByEmail(@Param("email")String email);
	
	@Query("select COUNT(d) from Driver d where d.email =:email and d.password=:password")
	int findByEmailAndPassword(@Param("email")String email,@Param("password")String password);
}
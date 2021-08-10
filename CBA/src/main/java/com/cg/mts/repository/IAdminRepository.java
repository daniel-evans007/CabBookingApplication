package com.cg.mts.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cg.mts.entities.Admin;


@Repository
public interface IAdminRepository extends JpaRepository<Admin, Long>{

	@Query("select COUNT(a) from Admin a where a.email =:email")
	int findByEmail(@Param("email")String email);
	
	@Query("select COUNT(a) from Admin a where a.email =:email and a.password=:password")
	int findByEmailAndPassword(@Param("email")String email,@Param("password")String password);
}
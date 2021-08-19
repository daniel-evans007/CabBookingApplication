package com.cg.mts.exception;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.http.ResponseEntity;

@ControllerAdvice
public class ExceptionController {

	@ExceptionHandler(value = UserNotLoginException.class)
	public ResponseEntity<Object> UserNotLogin(UserNotLoginException exception){
		return ResponseEntity.ok("Sorry, user is not logged in.");
	}
	
	@ExceptionHandler(value = CabNotFoundException.class)
	public ResponseEntity<Object> CabNotFound(CabNotFoundException exception){
		return ResponseEntity.ok("Cab not found");
	}
	
	@ExceptionHandler(value = CredentialMissmatchException.class)
	public ResponseEntity<Object> CabNotFound(CredentialMissmatchException exception){
		return ResponseEntity.ok("Email or Password is wrong.");
	}
	
	@ExceptionHandler(value = UserExistException.class)
	public ResponseEntity<Object> CabNotFound(UserExistException exception){
		return ResponseEntity.ok("User already exists.");
	}
}
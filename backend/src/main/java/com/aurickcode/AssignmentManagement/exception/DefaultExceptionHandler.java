package com.aurickcode.AssignmentManagement.exception;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import jakarta.servlet.http.HttpServletRequest;

@ControllerAdvice
public class DefaultExceptionHandler {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Error> handleException(
                            Exception e,
                            HttpServletRequest request                    
                        ) {
            Error apiError = new Error(
            request.getRequestURI(), 
            e.getMessage(), 
            HttpStatus.INTERNAL_SERVER_ERROR.value(), 
            LocalDateTime.now()
            );
        
        return new ResponseEntity<>(apiError, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

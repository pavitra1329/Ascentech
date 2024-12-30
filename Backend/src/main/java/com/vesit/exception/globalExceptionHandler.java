package com.vesit.exception;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class globalExceptionHandler {
    @ExceptionHandler(BookingNotFound.class)
    public ResponseEntity<ExceptionDTO> handleUserNotFoundException(BookingNotFound bookingNotFound) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ExceptionDTO(bookingNotFound.getStatusCode(), bookingNotFound.getMessage()));
    }
}

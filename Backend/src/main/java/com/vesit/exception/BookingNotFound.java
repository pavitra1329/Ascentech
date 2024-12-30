package com.vesit.exception;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class BookingNotFound extends RuntimeException{
    String statusCode;
    public BookingNotFound(String message, String statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

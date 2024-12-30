package com.vesit.controller;


import com.vesit.Entity.Booking;
import com.vesit.Entity.Hall;
import com.vesit.service.BookingService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
public class BookingController {

    @Autowired
    BookingService bookingService;

    // Add Booking
    @PostMapping("/book")
    public ResponseEntity<Booking> bookHall(@RequestBody Booking booking) {
        Booking storedDto = bookingService.saveBooking(booking);
        return ResponseEntity.status(HttpStatus.CREATED).body(storedDto);
    }

    // Get All Bookings
    @GetMapping("/bookings")
    public ResponseEntity<List<Booking>> getAllBookings() {
        List<Booking> bookings = bookingService.getAllBookings();
        return ResponseEntity.status(HttpStatus.OK).body(bookings);
    }

    // Update Booking
    @PutMapping("/update/{id}")
    public ResponseEntity<Booking> updateBooking(@RequestBody Booking booking, @PathVariable Long id) {
        Booking updateBooking = bookingService.updateBooking(booking, id);
        return ResponseEntity.status(HttpStatus.OK).body(updateBooking);
    }

    // Delete Booking
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteBooking(@PathVariable Long id) {
        bookingService.deleteBooking(id);
        return ResponseEntity.status(HttpStatus.OK).body("User [" + id + "] deleted");
    }


    // Get all hall Types
    @GetMapping("/hallTypes")
    public ResponseEntity<Hall[]> getAllHallTypes() {
        return ResponseEntity.status(HttpStatus.OK).body(Hall.values());
    }

}

package com.vesit.service;

import com.vesit.Entity.Booking;
import com.vesit.exception.BookingNotFound;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class BookingService {

    @PersistenceContext
    private EntityManager entityManager;

    // Save Booking
    public Booking saveBooking(Booking booking) {
        entityManager.persist(booking);
        return getBooking(booking.getId());
    }

    // Get All Bookings
    public List<Booking> getAllBookings() {
        return entityManager.createQuery("SELECT b FROM Booking b", Booking.class).getResultList();
    }

    // Update Booking
    public Booking updateBooking(Booking booking, Long id) {
        Booking savedBooking = getBooking(id);

        savedBooking.setName(booking.getName());
        savedBooking.setEmail(booking.getEmail());
        savedBooking.setMobile(booking.getMobile());
        savedBooking.setStartDate(booking.getStartDate());
        savedBooking.setEndDate(booking.getEndDate());
        savedBooking.setAdditionalCharges(booking.getAdditionalCharges());
        savedBooking.setHall(booking.getHall());
        savedBooking.setStatus(booking.getStatus());
        savedBooking.setApplicationNumber(booking.getApplicationNumber());
        savedBooking.setRemark(booking.getRemark());

        entityManager.merge(savedBooking);

        return savedBooking;
    }

    // Get a Booking
    public Booking getBooking(Long id) {
        Booking booking = entityManager.find(Booking.class, id);
        if (booking == null) {
            throw new BookingNotFound("Booking [" + id + "] not exists!!", "404");
        }
        return booking;
    }

    // Delete Booking
    public void deleteBooking(Long id) {
        Booking booking = getBooking(id);
        entityManager.remove(booking);
    }
}

package com.vesit.Entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.sql.Date;

@Entity
@Data
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String name;
    String email;
    String mobile;
    Date startDate;
    Date endDate;
    int rent;
    int additionalCharges;
    Hall hall;
    String status = "Confirm";
    String applicationNumber;
    String remark;
}

package com.example.demo.repository;

import com.example.demo.data.Vehicle;
import org.hibernate.mapping.Any;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Integer> {
}

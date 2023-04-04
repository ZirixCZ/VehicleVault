package com.example.demo.repository;

import com.example.demo.data.Locomotive;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
@Repository
public interface LocomotiveRepository extends JpaRepository<Locomotive, Integer> {
}

package com.example.demo.repository;

import com.example.demo.data.Locomotive;
import com.example.demo.data.Wagon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WagonRepository extends JpaRepository<Wagon, Integer> {
}

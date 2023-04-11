package com.example.demo.repository;

import com.example.demo.data.Locomotive;
import jakarta.transaction.Transactional;
import org.springframework.dao.DataAccessException;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Transactional
@Repository
public interface LocomotiveRepository extends JpaRepository<Locomotive, Integer> {
    @Modifying
    @Query("DELETE FROM Locomotive w WHERE w.uic = ?1")
    void deleteByUIC(int uic) throws DataAccessException;
}

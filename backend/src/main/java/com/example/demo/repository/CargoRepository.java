package com.example.demo.repository;

import com.example.demo.data.Cargo;
import jakarta.transaction.Transactional;
import org.springframework.dao.DataAccessException;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Transactional
@Repository
public interface CargoRepository extends JpaRepository<Cargo, Integer> {
    @Modifying
    @Query("DELETE FROM Cargo w WHERE w.uic = ?1")
    void deleteByUIC(int uic) throws DataAccessException;
}

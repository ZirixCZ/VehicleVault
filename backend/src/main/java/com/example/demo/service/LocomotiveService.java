package com.example.demo.service;

import com.example.demo.data.Locomotive;
import com.example.demo.repository.LocomotiveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocomotiveService implements LocomotiveInterface {

        @Autowired
        private LocomotiveRepository locomotiveRepository;

        @Autowired
        public List<Locomotive> saveVehicle(List<Locomotive> vehicle) {
            return locomotiveRepository.saveAll(vehicle);
        }

        @Override public List<Locomotive> fetchVehicleList()
        {
            return locomotiveRepository.findAll();
        }

        public void deleteVehicleByUIC(int id)
        {
            locomotiveRepository.deleteById(id);
        }

}

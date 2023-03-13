package com.example.demo.service;

import com.example.demo.data.Vehicle;
import com.example.demo.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class VehicleService implements VehicleInterface {

        @Autowired
        private VehicleRepository vehicleRepository;

        @Autowired
        public List<Vehicle> saveVehicle(List<Vehicle> vehicle) {
            return vehicleRepository.saveAll(vehicle);
        }

        @Override public List<Vehicle> fetchVehicleList()
        {
            return vehicleRepository.findAll();
        }

        public void deleteVehicleByUIC(int id)
        {
            vehicleRepository.deleteById(id);
        }

}

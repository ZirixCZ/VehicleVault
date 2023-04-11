package com.example.demo.service;

import com.example.demo.data.Cargo;
import com.example.demo.data.Locomotive;
import com.example.demo.repository.CargoRepository;
import com.example.demo.repository.LocomotiveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CargoService implements CargoInterface {

    @Autowired
    private CargoRepository cargoRepository;

    @Autowired
    public List<Cargo> saveVehicle(List<Cargo> vehicle) {
        return cargoRepository.saveAll(vehicle);
    }

    @Override
    public List<Cargo> fetchVehicleList() {
        return cargoRepository.findAll();
    }


    public void deleteByUIC(int uic) {
        cargoRepository.deleteByUIC(uic);
    }
}

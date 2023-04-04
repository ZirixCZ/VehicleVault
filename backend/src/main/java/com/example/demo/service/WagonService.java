package com.example.demo.service;

import com.example.demo.data.Wagon;
import com.example.demo.repository.WagonRepository;
import com.example.demo.data.Locomotive;
import com.example.demo.repository.LocomotiveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WagonService implements WagonInterface {

        @Autowired
        private WagonRepository wagonRepository;

        @Autowired
        public List<Wagon> saveVehicle(List<Wagon> vehicle) {
            return wagonRepository.saveAll(vehicle);
        }

        @Override public List<Wagon> fetchVehicleList()
        {
            return wagonRepository.findAll();
        }

        public void deleteVehicleByUIC(int id)
        {
            wagonRepository.deleteById(id);
        }

}

package com.example.demo.controller;

import com.example.demo.data.Vehicle;
import com.example.demo.service.VehicleService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class VehicleRestController {
    @Autowired
    private VehicleService vehicleService;

    @PostMapping("/vehicle")
    public List<Vehicle> addVehicle(@Valid @RequestBody List<Vehicle> vehicle) {
        return vehicleService.saveVehicle(vehicle);
    }
}

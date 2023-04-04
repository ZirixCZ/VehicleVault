package com.example.demo.controller;

import com.example.demo.data.Cargo;
import com.example.demo.data.Locomotive;
import com.example.demo.data.Wagon;
import com.example.demo.service.LocomotiveService;
import com.example.demo.service.CargoService;
import com.example.demo.service.WagonService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "*")
@RestController
public class VehicleRestController {
    @Autowired
    private LocomotiveService locomotiveService;

    @Autowired
    private CargoService cargoService;

    @Autowired
    private WagonService wagonService;

    @PostMapping("/addLocomotive")
    public List<Locomotive> addLocomotive(@Valid @RequestBody List<Locomotive> vehicle) {
        return locomotiveService.saveVehicle(vehicle);
    }

    @PostMapping("/addCargo")
    public List<Cargo> addCargo(@Valid @RequestBody List<Cargo> vehicle) {
        return cargoService.saveVehicle(vehicle);
    }

    @PostMapping("/addWagon")
    public List<Wagon> addWagon(@Valid @RequestBody List<Wagon> vehicle) {
        return wagonService.saveVehicle(vehicle);
    }

    @GetMapping("/fetchVehicles")
    public List<Locomotive> fetchVehicles() {
        return locomotiveService.fetchVehicleList();
    }
}

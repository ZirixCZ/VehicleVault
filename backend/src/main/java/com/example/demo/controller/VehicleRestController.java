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

    @GetMapping("/fetchLocomotives")
    public List<Locomotive> fetchLocomotives() {
        return locomotiveService.fetchVehicleList();
    }

    @GetMapping("/fetchCargo")
    public List<Cargo> fetchCargo() {
        return cargoService.fetchVehicleList();
    }

    @GetMapping("/fetchWagons")
    public List<Wagon> fetchWagons() {
        return wagonService.fetchVehicleList();
    }

    @DeleteMapping("/deleteLocomotive/{id}")
    public void deleteLocomotive(@PathVariable int id) {
        locomotiveService.deleteByUIC(id);
    }

    @DeleteMapping("/deleteCargo/{id}")
    public void deleteCargo(@PathVariable int id) {
        cargoService.deleteByUIC(id);
    }

    @DeleteMapping("/deleteWagon/{id}")
    public void deleteWagon(@PathVariable int id) {
        wagonService.deleteByUIC(id);
    }
}

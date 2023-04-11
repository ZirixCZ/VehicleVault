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
import java.util.Map;


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

    @DeleteMapping("/deleteLocomotive/")
    public void deleteLocomotive(@RequestBody List<Map<String, String>> uicList) {
        for (Map<String, String> uicMap : uicList) {
            int uic = Integer.parseInt(uicMap.get("deleteUIC"));
            locomotiveService.deleteByUIC(uic);
        }
    }

    @DeleteMapping("/deleteCargo")
    public void deleteCargo(@RequestBody List<Map<String, String>> uicList) {
        for (Map<String, String> uicMap : uicList) {
            int uic = Integer.parseInt(uicMap.get("deleteUIC"));
            cargoService.deleteByUIC(uic);
        }
    }

    @DeleteMapping("/deleteWagon")
    public void deleteWagon(@RequestBody List<Map<String, String>> uicList) {
        for (Map<String, String> uicMap : uicList) {
            int uic = Integer.parseInt(uicMap.get("deleteUIC"));
            wagonService.deleteByUIC(uic);
        }
    }
}

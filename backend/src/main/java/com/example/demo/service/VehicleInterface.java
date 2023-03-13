package com.example.demo.service;

import com.example.demo.data.Vehicle;

import java.util.List;

public interface VehicleInterface {
    List<Vehicle> saveVehicle(List<Vehicle> vehicle);

    List<Vehicle> fetchVehicleList();

    void deleteVehicleByUIC(int id);
}

package com.example.demo.service;

import com.example.demo.data.Cargo;
import com.example.demo.data.Locomotive;

import java.util.List;

public interface CargoInterface {
    List<Cargo> saveVehicle(List<Cargo> vehicle);

    List<Cargo> fetchVehicleList();

    void deleteByUIC(int id);
}

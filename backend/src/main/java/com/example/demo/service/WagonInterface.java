package com.example.demo.service;

import com.example.demo.data.Wagon;

import java.util.List;

public interface WagonInterface {
    List<Wagon> saveVehicle(List<Wagon> vehicle);

    List<Wagon> fetchVehicleList();

    void deleteByUIC(int id);
}

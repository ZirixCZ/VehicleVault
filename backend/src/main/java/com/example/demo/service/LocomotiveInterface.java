package com.example.demo.service;

import com.example.demo.data.Locomotive;

import java.util.List;

public interface LocomotiveInterface {
    List<Locomotive> saveVehicle(List<Locomotive> vehicle);

    List<Locomotive> fetchVehicleList();

    void deleteByUIC(int id);

}

package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonCreator;

public class Vehicle {
    private int id;
    private String UIC;
    private int length;
    private int maxSpeed;

    @JsonCreator
    public Vehicle(int id, String UIC, int length, int maxSpeed) {
        this.id = id;
        this.UIC = UIC;
        this.length = length;
        this.maxSpeed = maxSpeed;
    }

    public String getUIC() {
        return UIC;
    }

    public int getLength() {
        return length;
    }

    public int getMaxSpeed() {
        return maxSpeed;
    }

    public String getProperties() {
        return "UIC: " + UIC + ", Length: " + length + ", Max speed: " + maxSpeed;
    }
}

package com.example.demo.model;

public class Locomotive  extends Vehicle {
    private int power;

    public Locomotive(int id, String UIC, int length, int maxSpeed, int power) {
        super(id, UIC, length, maxSpeed);
        this.power = power;
    }
}

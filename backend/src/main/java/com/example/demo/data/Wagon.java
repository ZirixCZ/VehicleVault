package com.example.demo.data;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Component
@Table(name = "wagons")
public class Wagon {
    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotNull
    private long uic;

    @NotNull
    private int length;

    @NotNull
    private int maxspeed;

    private int capacity;
}

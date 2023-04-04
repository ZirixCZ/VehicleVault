package com.example.demo.data;

import com.example.demo.data.Vehicle;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Component
@Table(name = "locomotives")
public class Locomotive {
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

    private String type;

    private int power;
    
    private int pullPower;
}

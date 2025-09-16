package com.example.Backend_BakeryShop.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Cakes{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String about="cakes";

    @Lob
    private byte[] img;
    private String caption;
    private int price;
}

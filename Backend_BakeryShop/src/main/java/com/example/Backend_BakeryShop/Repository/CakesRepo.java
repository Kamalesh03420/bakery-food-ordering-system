package com.example.Backend_BakeryShop.Repository;

import com.example.Backend_BakeryShop.Model.Cakes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CakesRepo extends JpaRepository<Cakes,Integer> {
}

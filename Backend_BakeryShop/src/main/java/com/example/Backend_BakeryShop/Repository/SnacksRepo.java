package com.example.Backend_BakeryShop.Repository;

import com.example.Backend_BakeryShop.Model.Snacks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SnacksRepo extends JpaRepository<Snacks,Integer> {
}

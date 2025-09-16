package com.example.Backend_BakeryShop.Repository;

import com.example.Backend_BakeryShop.Model.Sweets;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SweetsRepo extends JpaRepository<Sweets,Integer> {
}

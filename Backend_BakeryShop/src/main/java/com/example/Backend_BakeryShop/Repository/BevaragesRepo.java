package com.example.Backend_BakeryShop.Repository;

import com.example.Backend_BakeryShop.Model.Bevarages;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BevaragesRepo extends JpaRepository<Bevarages,Integer> {
}

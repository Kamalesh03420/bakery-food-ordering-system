package com.example.Backend_BakeryShop.Service;

import com.example.Backend_BakeryShop.Model.Sweets;
import com.example.Backend_BakeryShop.Repository.SweetsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SweetsService {

    @Autowired
    private SweetsRepo repo;

    public List<Sweets> getAllSweetsWithoutImages() {
        List<Sweets> sweets=repo.findAll();
        sweets.forEach(sweet->sweet.setImg(null));
        return sweets;
    }

    public Sweets getSweetById(int id) {
        return repo.findById(id).orElse(null);
    }

    public Sweets setSweet(Sweets sweet) {
        return repo.save(sweet);
    }

    public Sweets updateSweet(int id, Sweets sweet) {
        sweet.setId(id);
        return repo.save(sweet);
    }

    public void deleteSweet(int id) {
        repo.deleteById(id);
    }
}
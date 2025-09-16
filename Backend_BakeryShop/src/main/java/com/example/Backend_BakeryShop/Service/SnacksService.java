package com.example.Backend_BakeryShop.Service;

import com.example.Backend_BakeryShop.Model.Snacks;
import com.example.Backend_BakeryShop.Repository.SnacksRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SnacksService {

    @Autowired
    private SnacksRepo repo;

    public List<Snacks> getAllSnacksWithoutImages() {
        List<Snacks> snacks=repo.findAll();
        snacks.forEach(snack->snack.setImg(null));
        return snacks;
    }

    public Snacks getSnackById(int id) {
        return repo.findById(id).orElse(null);
    }

    public Snacks setSnack(Snacks snack) {
        return repo.save(snack);
    }

    public Snacks updateSnack(int id, Snacks snack) {
        snack.setId(id);
        return repo.save(snack);
    }

    public void deleteSnack(int id) {
        repo.deleteById(id);
    }
}
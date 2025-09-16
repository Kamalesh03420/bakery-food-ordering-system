package com.example.Backend_BakeryShop.Service;

import com.example.Backend_BakeryShop.Model.Bevarages;
import com.example.Backend_BakeryShop.Repository.BevaragesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BevaragesService {

    @Autowired
    private BevaragesRepo repo;

    public List<Bevarages> getAllBevaragesWithoutImages() {
        List<Bevarages> bevarages=repo.findAll();
        bevarages.forEach(bevarage->bevarage.setImg(null));
        return bevarages;
    }

    public Bevarages getBevarageById(int id) {
        return repo.findById(id).orElse(null);
    }

    public Bevarages setBevarage(Bevarages bevarage) {
        return repo.save(bevarage);
    }

    public Bevarages updateBevarage(int id, Bevarages bevarage) {
        bevarage.setId(id);
        return repo.save(bevarage);
    }

    public void deleteBevarage(int id) {
        repo.deleteById(id);
    }
}
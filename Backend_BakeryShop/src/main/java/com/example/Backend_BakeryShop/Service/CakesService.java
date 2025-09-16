package com.example.Backend_BakeryShop.Service;

import com.example.Backend_BakeryShop.Model.Cakes;
import com.example.Backend_BakeryShop.Repository.CakesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;



@Service
public class CakesService {

    @Autowired
    private CakesRepo repo;

    public List<Cakes> getAllCakesWithoutImage() {
        List<Cakes> cakes=repo.findAll();
        cakes.forEach(cake->cake.setImg(null));
        return cakes;
    }

    public Cakes getCakeById(int id) {
        Cakes cake = repo.findById(id).orElse(null);
        return cake;
    }

    public Cakes setCakes(Cakes cake) {
        return repo.save(cake);
    }

    public Cakes UpdateCake(int id, Cakes cake) {
        cake.setId(id);
        return repo.save(cake);
    }

    public void deleteCake(int id) {
        repo.deleteById(id);
    }
}

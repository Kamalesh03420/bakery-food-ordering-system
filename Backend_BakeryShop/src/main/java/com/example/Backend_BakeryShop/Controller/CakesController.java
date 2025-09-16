package com.example.Backend_BakeryShop.Controller;

import com.example.Backend_BakeryShop.Model.Cakes;
import com.example.Backend_BakeryShop.Service.CakesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class CakesController {

    @Autowired
    private CakesService service;

    @GetMapping("/cakes")
    public List<Cakes> getAllCakes(){
        return service.getAllCakesWithoutImage();
    }

    @GetMapping("/cakes/{id}/image")
    public ResponseEntity<byte[]> getCakeImage(@PathVariable int id) {
        Cakes cake = service.getCakeById(id);
        if (cake != null && cake.getImg() != null) {
            return ResponseEntity.ok()
                    .contentType(MediaType.IMAGE_JPEG)
                    .body(cake.getImg());
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/cakes")
    public Cakes setCakes(@RequestParam MultipartFile img,
                          @RequestParam String caption,
                          @RequestParam int price){
        Cakes cake=new Cakes();
        try {
            cake.setImg(img.getBytes());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        cake.setCaption(caption);
        cake.setPrice(price);
        return service.setCakes(cake);
    }

    @PutMapping("/cakes/{id}")
    public Cakes updateCake(@PathVariable int id,
                            @RequestBody Cakes cake){
        return service.UpdateCake(id, cake);
    }

    @DeleteMapping("/cakes/{id}")
    public String deleteCake(@PathVariable int id){
        service.deleteCake(id);
        return "Deleted...";
    }
}

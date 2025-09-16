package com.example.Backend_BakeryShop.Controller;

import com.example.Backend_BakeryShop.Model.Sweets;
import com.example.Backend_BakeryShop.Service.SweetsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class SweetsController {

    @Autowired
    private SweetsService service;

    @GetMapping("/sweets")
    public List<Sweets> getAllSweets(){
        return service.getAllSweetsWithoutImages();
    }

    @GetMapping("/sweets/{id}/image")
    public ResponseEntity<byte[]> getImage(@PathVariable int id){
        Sweets sweet=service.getSweetById(id);
        if(sweet!=null && sweet.getImg()!=null){
            return ResponseEntity.ok()
                    .contentType(MediaType.IMAGE_JPEG)
                    .body(sweet.getImg());
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/sweets")
    public Sweets setSweet(@RequestParam MultipartFile img,
                           @RequestParam String caption,
                           @RequestParam int price){
        Sweets sweet=new Sweets();
        try {
            sweet.setImg(img.getBytes());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        sweet.setCaption(caption);
        sweet.setPrice(price);
        return service.setSweet(sweet);
    }

    @PutMapping("/sweets/{id}")
    public Sweets updateSweet(@PathVariable int id,
                              @RequestBody Sweets sweet){
        return service.updateSweet(id,sweet);
    }

    @DeleteMapping("/sweets/{id}")
    public String deleteSweet(@PathVariable int id){
        service.deleteSweet(id);
        return "Deleted...";
    }
}

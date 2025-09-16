package com.example.Backend_BakeryShop.Controller;

import com.example.Backend_BakeryShop.Model.Bevarages;
import com.example.Backend_BakeryShop.Service.BevaragesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class BevaragesController {

    @Autowired
    private BevaragesService service;

    @GetMapping("/bevarages")
    public List<Bevarages> getAllBevarages(){
        return service.getAllBevaragesWithoutImages();
    }

    @GetMapping("/bevarages/{id}/image")
    public ResponseEntity<byte[]> getImage(@PathVariable int id){
        Bevarages bevarage=service.getBevarageById(id);
        if(bevarage!=null && bevarage.getImg()!=null){
            return ResponseEntity.ok()
                    .contentType(MediaType.IMAGE_JPEG)
                    .body(bevarage.getImg());
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/bevarages")
    public Bevarages setBevarage(@RequestParam MultipartFile img,
                                 @RequestParam String caption,
                                 @RequestParam int price){
        Bevarages bevarage=new Bevarages();
        try {
            bevarage.setImg(img.getBytes());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        bevarage.setCaption(caption);
        bevarage.setPrice(price);
        return service.setBevarage(bevarage);
    }

    @PutMapping("/bevarages/{id}")
    public Bevarages updateBevarage(@PathVariable int id,
                                    @RequestBody Bevarages bevarage){
        return service.updateBevarage(id,bevarage);
    }

    @DeleteMapping("/bevarages/{id}")
    public String deleteBevarage(@PathVariable int id){
        service.deleteBevarage(id);
        return "Deleted...";
    }
}

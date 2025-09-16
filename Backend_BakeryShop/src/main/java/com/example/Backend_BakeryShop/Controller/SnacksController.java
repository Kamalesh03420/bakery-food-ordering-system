package com.example.Backend_BakeryShop.Controller;

import com.example.Backend_BakeryShop.Model.Snacks;
import com.example.Backend_BakeryShop.Service.SnacksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class SnacksController {

    @Autowired
    private SnacksService service;

    @GetMapping("/snacks")
    public List<Snacks> getAllSnacks(){
        return service.getAllSnacksWithoutImages();
    }

    @GetMapping("/snacks/{id}/image")
    public ResponseEntity<byte[]> getImage(@PathVariable int id){
        Snacks snack=service.getSnackById(id);
        if(snack!=null && snack.getImg()!=null){
            return ResponseEntity.ok()
                    .contentType(MediaType.IMAGE_JPEG)
                    .body(snack.getImg());
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/snacks")
    public Snacks setSnack(@RequestParam MultipartFile img,
                           @RequestParam String caption,
                           @RequestParam int price){
        Snacks snack=new Snacks();
        try {
            snack.setImg(img.getBytes());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        snack.setCaption(caption);
        snack.setPrice(price);
        return service.setSnack(snack);
    }

    @PutMapping("/snacks/{id}")
    public Snacks updateSnack(@PathVariable int id,
                              @RequestBody Snacks snack){
        return service.updateSnack(id,snack);
    }

    @DeleteMapping("/snacks/{id}")
    public String deleteSnack(@PathVariable int id){
        service.deleteSnack(id);
        return "Deleted...";
    }
}

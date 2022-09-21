package com.almaz.controllers;

import com.almaz.entities.Text;
import com.almaz.services.TextService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/text")
@CrossOrigin(origins = "*")
public class TextController {

    private final TextService textService;

    @Autowired
    public TextController(TextService textService) {this.textService = textService;} 

    @GetMapping
    public Text getText() {
        return textService.getRandomText();
    }

    @DeleteMapping("/{textId}")
    public Text deleteText(@PathVariable Long textId) {
        return textService.deleteText(textId);
    }

    @PutMapping("/{textId}")
    public Text updateText(@PathVariable Long textId, @RequestBody Text text) {
        return textService.updateText(textId, text);
    }

    @PostMapping
    public Text createText(@RequestBody Text textData) {
        return textService.createText(textData);
    }

}

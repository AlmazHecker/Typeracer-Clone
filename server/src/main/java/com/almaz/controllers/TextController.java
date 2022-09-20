package com.almaz.controllers;

import com.almaz.entities.Text;
import com.almaz.services.TextService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/text")
@CrossOrigin(origins = "*")
public class TextController {

    private final TextService textService;

    @Autowired
    public TextController(TextService textService) {this.textService = textService;} 

    @GetMapping
    public String getText() {
        return "hello world hello world yohohoho";
    }
}

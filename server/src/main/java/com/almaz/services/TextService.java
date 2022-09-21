package com.almaz.services;

import com.almaz.entities.Text;
import com.almaz.repositories.TextRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
public class TextService {
    private final TextRepository textRepository;
    public TextService(TextRepository textRepository) {this.textRepository = textRepository;}

    public Text getRandomText() {
        List<Text> texts = textRepository.findAll();
        return getRandomElement(texts);
    }
    public Text deleteText(Long textId){
        Text text = textRepository.findTextById(textId);
        textRepository.delete(text);

        return text;
    }
    public Text updateText(Long textId, Text textData) {
        Text text = textRepository.findTextById(textId);
        text.setText(textData.getText());
        textRepository.save(text);
        return text;
    }
    public Text createText(Text textData) {
        Text text= new Text(textData.getText());
        textRepository.save(text);
        return text;
    }
    public Text getTextById(Long textId) {
        Text text = textRepository.findTextById(textId);
        return text;
    }

    public Text getRandomElement(List<Text> list) {
        Random rand = new Random();
        return list.get(rand.nextInt(list.size()));
    }

}

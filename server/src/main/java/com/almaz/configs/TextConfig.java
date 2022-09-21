package com.almaz.configs;

import com.almaz.entities.Text;
import com.almaz.repositories.TextRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class TextConfig {
    @Bean
    CommandLineRunner commandLineRunner(TextRepository textRepository){
        return args -> {
            Text text = new Text("She keeps Moet et Chandon\n" +
                    "In her pretty cabinet\n" +
                    "\"Let them eat cake,\" she says\n" +
                    "Just like Marie Antoinette\n" +
                    "A built-in remedy\n" +
                    "For Khrushchev and Kennedy (Ooh, ooh)\n" +
                    "At anytime an invitation\n" +
                    "You can't decline (Ooh, ooh)");
            textRepository.save(text);
        };

    }
}


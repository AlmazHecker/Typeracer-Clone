package com.almaz.entities;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table
public class Text {
    @Id
    @SequenceGenerator(
            name = "text_sequence",
            sequenceName = "text_sequence",
            allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "text_sequence")
    private Long id;

    private String text;

    private LocalDate createdAt;

    private LocalDate updatedAt;
}

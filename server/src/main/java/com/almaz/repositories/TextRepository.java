package com.almaz.repositories;

import com.almaz.entities.Text;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TextRepository extends JpaRepository<Text, Long> {

    @Query("SELECT p FROM Text p WHERE p.id = ?1")
    Text findTextById(Long id);
}

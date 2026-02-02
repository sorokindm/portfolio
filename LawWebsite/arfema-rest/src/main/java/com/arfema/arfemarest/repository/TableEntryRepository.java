package com.arfema.arfemarest.repository;

import com.arfema.arfemarest.entity.TableEntryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * The interface Table entry repository.
 */
public interface TableEntryRepository extends JpaRepository<TableEntryEntity, Long> {
    /**
     * Find all by title containing list.
     *
     * @param searchTerm the search term
     * @return the list
     */
    List<TableEntryEntity> findAllByTitleContaining(String searchTerm);
}

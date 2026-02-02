package com.arfema.arfemarest.repository;

import com.arfema.arfemarest.entity.CategoryEntity;
import com.arfema.arfemarest.util.EnumTableType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * The interface Category repository.
 */
public interface CategoryRepository extends JpaRepository<CategoryEntity, Long> {
    /**
     * Find all by enum table type order by ranking asc list.
     *
     * @param enumTableType the enum table type
     * @return the list
     */
    List<CategoryEntity> findAllByEnumTableTypeOrderByRankingAsc(EnumTableType enumTableType);

    /**
     * Find all by title containing list.
     *
     * @param searchTerm the search term
     * @return the list
     */
    List<CategoryEntity> findAllByTitleContaining(String searchTerm);

}

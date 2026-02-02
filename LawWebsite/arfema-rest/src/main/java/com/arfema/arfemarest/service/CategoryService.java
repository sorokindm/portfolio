package com.arfema.arfemarest.service;

import com.arfema.arfemarest.dto.PriceSearchResultDto;
import com.arfema.arfemarest.dto.PriceTableDto;
import com.arfema.arfemarest.util.EnumTableType;

/**
 * The interface Category service.
 */
public interface CategoryService {
    /**
     * Find categories for table ordered price table dto.
     *
     * @param tableType the table type
     * @return the price table dto
     */
    PriceTableDto findCategoriesForTableOrdered(EnumTableType tableType);

    /**
     * Search price price search result dto.
     *
     * @param searchTerm the search term
     * @return the price search result dto
     */
    PriceSearchResultDto searchPrice(String searchTerm);

    /**
     * Change price.
     *
     * @param id    the id
     * @param price the price
     */
    void changePrice(Long id, String price);
}

package com.arfema.arfemarest.dto;

import java.util.List;

/**
 * The type Price search result dto.
 */
public class PriceSearchResultDto {
    /**
     * The Entries.
     */
    List<TableEntryDto> entries;
    /**
     * The Categories.
     */
    List<CategoryDto> categories;

    /**
     * Gets entries.
     *
     * @return the entries
     */
    public List<TableEntryDto> getEntries() {
        return entries;
    }

    /**
     * Sets entries.
     *
     * @param entries the entries
     */
    public void setEntries(List<TableEntryDto> entries) {
        this.entries = entries;
    }

    /**
     * Gets categories.
     *
     * @return the categories
     */
    public List<CategoryDto> getCategories() {
        return categories;
    }

    /**
     * Sets categories.
     *
     * @param categories the categories
     */
    public void setCategories(List<CategoryDto> categories) {
        this.categories = categories;
    }
}

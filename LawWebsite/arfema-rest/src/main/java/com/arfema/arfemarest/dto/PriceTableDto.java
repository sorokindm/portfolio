package com.arfema.arfemarest.dto;

import java.util.List;

/**
 * The type Price table dto.
 */
public class PriceTableDto {

    /**
     * The Category dto list.
     */
    List<CategoryDto> categoryDtoList;

    /**
     * Gets category dto list.
     *
     * @return the category dto list
     */
    public List<CategoryDto> getCategoryDtoList() {
        return categoryDtoList;
    }

    /**
     * Sets category dto list.
     *
     * @param categoryDtoList the category dto list
     */
    public void setCategoryDtoList(List<CategoryDto> categoryDtoList) {
        this.categoryDtoList = categoryDtoList;
    }
}

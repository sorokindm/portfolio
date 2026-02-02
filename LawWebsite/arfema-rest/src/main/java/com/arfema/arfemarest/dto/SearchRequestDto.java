package com.arfema.arfemarest.dto;

/**
 * The type search request dto.
 */
public class SearchRequestDto {
    /**
     * The searchString.
     */
    String searchString;
    /**
     * The Page.
     */
    int page;

    /**
     * Gets searchString.
     *
     * @return the searchString
     */
    public String getSearchString() {
        return searchString;
    }

    /**
     * Sets searchString.
     *
     * @param searchString the searchString
     */
    public void setSearchString(String searchString) {
        this.searchString = searchString;
    }

    /**
     * Gets page.
     *
     * @return the page
     */
    public int getPage() {
        return page;
    }

    /**
     * Sets page.
     *
     * @param page the page
     */
    public void setPage(int page) {
        this.page = page;
    }
}

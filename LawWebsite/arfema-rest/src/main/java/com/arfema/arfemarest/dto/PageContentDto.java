package com.arfema.arfemarest.dto;

import java.util.List;

/**
 * The type Page content dto.
 */
public class PageContentDto {
    /**
     * The Content dto list.
     */
    List<ContentDto> contentDtoList;
    /**
     * The Max pages.
     */
    int maxPages;

    /**
     * Gets content dto list.
     *
     * @return the content dto list
     */
    public List<ContentDto> getContentDtoList() {
        return contentDtoList;
    }

    /**
     * Sets content dto list.
     *
     * @param contentDtoList the content dto list
     */
    public void setContentDtoList(List<ContentDto> contentDtoList) {
        this.contentDtoList = contentDtoList;
    }

    /**
     * Gets max pages.
     *
     * @return the max pages
     */
    public int getMaxPages() {
        return maxPages;
    }

    /**
     * Sets max pages.
     *
     * @param maxPages the max pages
     */
    public void setMaxPages(int maxPages) {
        this.maxPages = maxPages;
    }
}

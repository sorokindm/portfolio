package com.arfema.arfemarest.dto;

/**
 * The type Tag request dto.
 */
public class TagRequestDto {
    /**
     * The Tag.
     */
    String tag;
    /**
     * The Page.
     */
    int page;

    /**
     * Gets tag.
     *
     * @return the tag
     */
    public String getTag() {
        return tag;
    }

    /**
     * Sets tag.
     *
     * @param tag the tag
     */
    public void setTag(String tag) {
        this.tag = tag;
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

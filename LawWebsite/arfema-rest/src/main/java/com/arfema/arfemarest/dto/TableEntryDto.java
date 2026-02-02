package com.arfema.arfemarest.dto;

import java.util.List;

/**
 * The type Table entry dto.
 */
public class TableEntryDto {
    private Long id;

    private Long rank;

    private List<String> title;

    private String price;

    private List<TableEntryLinkDto> links;

    /**
     * Gets id.
     *
     * @return the id
     */
    public Long getId() {
        return id;
    }

    /**
     * Sets id.
     *
     * @param id the id
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * Gets rank.
     *
     * @return the rank
     */
    public Long getRank() {
        return rank;
    }

    /**
     * Sets rank.
     *
     * @param rank the rank
     */
    public void setRank(Long rank) {
        this.rank = rank;
    }

    /**
     * Gets title.
     *
     * @return the title
     */
    public List<String> getTitle() {
        return title;
    }

    /**
     * Sets title.
     *
     * @param title the title
     */
    public void setTitle(List<String> title) {
        this.title = title;
    }

    /**
     * Gets price.
     *
     * @return the price
     */
    public String getPrice() {
        return price;
    }

    /**
     * Sets price.
     *
     * @param price the price
     */
    public void setPrice(String price) {
        this.price = price;
    }

    /**
     * Gets links.
     *
     * @return the links
     */
    public List<TableEntryLinkDto> getLinks() {
        return links;
    }

    /**
     * Sets links.
     *
     * @param links the links
     */
    public void setLinks(List<TableEntryLinkDto> links) {
        this.links = links;
    }
}

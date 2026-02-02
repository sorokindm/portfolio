package com.arfema.arfemarest.dto;

import java.util.List;

/**
 * The type Category dto.
 */
public class CategoryDto {
    private Long id;

    private List<String> title;

    private String enumTableType;

    private Long ranking;

    private List<TableEntryDto> entries;

    private List<CategoryLinkDto> links;

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
     * Gets enum table type.
     *
     * @return the enum table type
     */
    public String getEnumTableType() {
        return enumTableType;
    }

    /**
     * Sets enum table type.
     *
     * @param enumTableType the enum table type
     */
    public void setEnumTableType(String enumTableType) {
        this.enumTableType = enumTableType;
    }

    /**
     * Gets ranking.
     *
     * @return the ranking
     */
    public Long getRanking() {
        return ranking;
    }

    /**
     * Sets ranking.
     *
     * @param ranking the ranking
     */
    public void setRanking(Long ranking) {
        this.ranking = ranking;
    }

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
     * Gets links.
     *
     * @return the links
     */
    public List<CategoryLinkDto> getLinks() {
        return links;
    }

    /**
     * Sets links.
     *
     * @param links the links
     */
    public void setLinks(List<CategoryLinkDto> links) {
        this.links = links;
    }
}

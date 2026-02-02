package com.arfema.arfemarest.entity;

import com.arfema.arfemarest.util.EnumTableType;
import jakarta.persistence.*;

import java.util.List;

/**
 * The type Category entity.
 */
@Entity
@Table(name = "CATEGORY")
public class CategoryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "tablename")
    @Enumerated(EnumType.STRING)
    private EnumTableType enumTableType;

    @Column(name = "ranking")
    private Long ranking;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "category")
    private List<TableEntryEntity> entries;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "cat")
    private List<CategoryLinkEntity> links;

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
    public String getTitle() {
        return title;
    }

    /**
     * Sets title.
     *
     * @param title the title
     */
    public void setTitle(String title) {
        this.title = title;
    }

    /**
     * Gets enum table type.
     *
     * @return the enum table type
     */
    public EnumTableType getEnumTableType() {
        return enumTableType;
    }

    /**
     * Sets enum table type.
     *
     * @param enumTableType the enum table type
     */
    public void setEnumTableType(EnumTableType enumTableType) {
        this.enumTableType = enumTableType;
    }

    /**
     * Gets entries.
     *
     * @return the entries
     */
    public List<TableEntryEntity> getEntries() {
        return entries;
    }

    /**
     * Sets entries.
     *
     * @param entries the entries
     */
    public void setEntries(List<TableEntryEntity> entries) {
        this.entries = entries;
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
     * @param order the order
     */
    public void setRanking(Long order) {
        this.ranking = order;
    }

    /**
     * Gets links.
     *
     * @return the links
     */
    public List<CategoryLinkEntity> getLinks() {
        return links;
    }

    /**
     * Sets links.
     *
     * @param links the links
     */
    public void setLinks(List<CategoryLinkEntity> links) {
        this.links = links;
    }
}

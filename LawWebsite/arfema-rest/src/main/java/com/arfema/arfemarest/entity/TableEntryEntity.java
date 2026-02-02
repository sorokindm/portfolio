package com.arfema.arfemarest.entity;

import jakarta.persistence.*;

import java.util.List;

/**
 * The type Table entry entity.
 */
@Entity
@Table(name = "TABLE_ENTRY")
public class TableEntryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Column(name = "rank")
    private Long rank;

    @Column(name = "title")
    private String title;

    @Column(name = "price")
    private String price;

    @ManyToOne
    @JoinColumn(name = "category")
    private CategoryEntity category;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "entry")
    private List<TableEntryLinkEntity> link;

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
     * @param order the order
     */
    public void setRank(Long order) {
        this.rank = order;
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
     * Gets category.
     *
     * @return the category
     */
    public CategoryEntity getCategory() {
        return category;
    }

    /**
     * Sets category.
     *
     * @param category the category
     */
    public void setCategory(CategoryEntity category) {
        this.category = category;
    }

    /**
     * Gets link.
     *
     * @return the link
     */
    public List<TableEntryLinkEntity> getLink() {
        return link;
    }

    /**
     * Sets link.
     *
     * @param link the link
     */
    public void setLink(List<TableEntryLinkEntity> link) {
        this.link = link;
    }
}

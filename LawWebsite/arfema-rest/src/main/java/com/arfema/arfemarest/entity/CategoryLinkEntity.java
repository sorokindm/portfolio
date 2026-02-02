package com.arfema.arfemarest.entity;

import jakarta.persistence.*;

/**
 * The type Category link entity.
 */
@Entity
@Table(name = "CATEGORY_LINK")
public class CategoryLinkEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Column(name ="link")
    private String link;

    @Column(name = "text")
    private String text;

    @Column(name = "title")
    private String title;

    @ManyToOne
    @JoinColumn(name = "cat")
    private CategoryEntity cat;

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
     * Gets link.
     *
     * @return the link
     */
    public String getLink() {
        return link;
    }

    /**
     * Sets link.
     *
     * @param link the link
     */
    public void setLink(String link) {
        this.link = link;
    }

    /**
     * Gets text.
     *
     * @return the text
     */
    public String getText() {
        return text;
    }

    /**
     * Sets text.
     *
     * @param text the text
     */
    public void setText(String text) {
        this.text = text;
    }

    /**
     * Gets cat.
     *
     * @return the cat
     */
    public CategoryEntity getCat() {
        return cat;
    }

    /**
     * Sets cat.
     *
     * @param category the category
     */
    public void setCat(CategoryEntity category) {
        this.cat = category;
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
}

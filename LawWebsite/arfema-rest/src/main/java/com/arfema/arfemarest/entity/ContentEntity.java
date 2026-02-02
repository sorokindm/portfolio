package com.arfema.arfemarest.entity;

import com.arfema.arfemarest.util.ContentType;
import com.arfema.arfemarest.util.ContentTypeConverter;
import com.arfema.arfemarest.util.TagsConverter;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;

/**
 * The type Content entity.
 */
@Entity
@Table(name = "CONTENT")
public class ContentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    /**
     * The Html content.
     */
    @Column(name = "html_content", columnDefinition = "TEXT")
    String htmlContent;

    /**
     * The Title.
     */
    @Column(name = "title")
    String title;

    /**
     * The Created.
     */
    @Column(name = "created")
    LocalDateTime created;

    /**
     * The Tags.
     */
    @Column(name = "tags")
    @Convert(converter = TagsConverter.class)
    List<String> tags;

    /**
     * The Content type.
     */
    @Column(name = "content_type")
    @Convert(converter = ContentTypeConverter.class)
    ContentType contentType;

    /**
     * The Crop.
     */
    @Column(name = "crop")
    int crop = 0;

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
     * Gets html content.
     *
     * @return the html content
     */
    public String getHtmlContent() {
        return htmlContent;
    }

    /**
     * Sets html content.
     *
     * @param content the content
     */
    public void setHtmlContent(String content) {
        this.htmlContent = content;
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
     * Gets created.
     *
     * @return the created
     */
    public LocalDateTime getCreated() {
        return created;
    }

    /**
     * Sets created.
     *
     * @param created the created
     */
    public void setCreated(LocalDateTime created) {
        this.created = created;
    }

    /**
     * Gets tags.
     *
     * @return the tags
     */
    public List<String> getTags() {
        return tags;
    }

    /**
     * Sets tags.
     *
     * @param tags the tags
     */
    public void setTags(List<String> tags) {
        this.tags = tags;
    }

    /**
     * Gets content type.
     *
     * @return the content type
     */
    public ContentType getContentType() {
        return contentType;
    }

    /**
     * Sets content type.
     *
     * @param type the type
     */
    public void setContentType(ContentType type) {
        this.contentType = type;
    }

    /**
     * Gets crop.
     *
     * @return the crop
     */
    public int getCrop() {
        return crop;
    }

    /**
     * Sets crop.
     *
     * @param crop the crop
     */
    public void setCrop(int crop) {
        this.crop = crop;
    }
}

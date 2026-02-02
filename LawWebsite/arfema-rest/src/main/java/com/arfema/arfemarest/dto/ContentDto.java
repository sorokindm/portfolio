package com.arfema.arfemarest.dto;

import java.util.List;

/**
 * The type Content dto.
 */
public class ContentDto {

    private Long id;

    private String htmlContent;

    private String title;

    private String created;

    private List<String> tags;

    private String contentType;

    private int crop;

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
     * @param htmlContent the html content
     */
    public void setHtmlContent(String htmlContent) {
        this.htmlContent = htmlContent;
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
    public String getCreated() {
        return created;
    }

    /**
     * Sets created.
     *
     * @param created the created
     */
    public void setCreated(String created) {
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
    public String getContentType() {
        return contentType;
    }

    /**
     * Sets content type.
     *
     * @param contentType the content type
     */
    public void setContentType(String contentType) {
        this.contentType = contentType;
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

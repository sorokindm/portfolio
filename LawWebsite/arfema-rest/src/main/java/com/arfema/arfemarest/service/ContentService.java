package com.arfema.arfemarest.service;

import com.arfema.arfemarest.dto.ContentDto;
import com.arfema.arfemarest.dto.PageContentDto;

/**
 * The interface Content service.
 */
public interface ContentService {

    PageContentDto getAllContent(int page, String searchTerm);
    /**
     * Gets all news.
     *
     * @param page the page
     * @return the all news
     */
    PageContentDto getAllNews(int page);

    /**
     * Gets all practice.
     *
     * @param page the page
     * @return the all practice
     */
    PageContentDto getAllPractice(int page);

    /**
     * Gets content.
     *
     * @param id the id
     * @return the content
     */
    ContentDto getContent(Long id);

    /**
     * Gets all tagged.
     *
     * @param tag  the tag
     * @param page the page
     * @return the all tagged
     */
    PageContentDto getAllTagged(String tag, int page);

    /**
     * Gets all by search string.
     *
     * @param searchString the search string
     * @param page         the page
     * @return the all by search string
     */
    PageContentDto getAllBySearchString(String searchString, int page);

}

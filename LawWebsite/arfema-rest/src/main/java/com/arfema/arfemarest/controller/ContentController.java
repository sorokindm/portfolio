package com.arfema.arfemarest.controller;

import com.arfema.arfemarest.dto.*;
import com.arfema.arfemarest.service.CategoryService;
import com.arfema.arfemarest.service.ContentService;
import com.arfema.arfemarest.util.EnumTableType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


/**
 * The controller Content controller.
 * Rest controller responsible for serving content(news, practice)
 */
@RestController
public class ContentController {

    private final ContentService contentService;
    private final CategoryService categoryService;

    /**
     * Instantiates a new Content controller.
     *
     * @param contentService  the content service
     * @param categoryService category service
     */
    @Autowired
    public ContentController(ContentService contentService, CategoryService categoryService) {
        this.contentService = contentService;
        this.categoryService = categoryService;
    }

    /**
     * Gets all content.
     *
     * @param page       the page
     * @param searchTerm the search term
     * @return the all content
     */
    @GetMapping("api/public/getAllContent")
    public PageContentDto getAllContent(@RequestParam int page, @RequestParam String searchTerm) {return contentService.getAllContent(page, searchTerm);}

    /**
     * Gets all news.
     *
     * @param page the page
     * @return the all news
     */
    @GetMapping("api/public/getAllNews")
    public PageContentDto getAllNews(@RequestParam int page) {
        return contentService.getAllNews(page);
    }

    /**
     * Gets all practice.
     *
     * @param page the page
     * @return the all practice
     */
    @GetMapping("api/public/getAllPractice")
    public PageContentDto getAllPractice(@RequestParam int page) {
        return contentService.getAllPractice(page);
    }

    /**
     * Gets content.
     *
     * @param id the id
     * @return the content
     */
    @GetMapping("api/public/getContent")
    public ContentDto getContent(@RequestParam Long id) {
        return contentService.getContent(id);
    }

    /**
     * Gets all tagged.
     *
     * @param tagRequestDto the tag request dto
     * @return the all tagged
     */
    @PostMapping("/api/public/getAllTagged")
    public PageContentDto getAllTagged(@RequestBody TagRequestDto tagRequestDto) {
        return contentService.getAllTagged(tagRequestDto.getTag(), tagRequestDto.getPage());
    }

    /**
     * Gets all by search string.
     *
     * @param searchRequestDto the search request dto
     * @return the all by search string
     */
    @PostMapping("/api/public/search")
    public PageContentDto getAllBySearchString(@RequestBody SearchRequestDto searchRequestDto) {
        return contentService.getAllBySearchString(searchRequestDto.getSearchString(), searchRequestDto.getPage());
    }

    /**
     * Gets all by search string.
     *
     * @param enumTableType the enum table type
     * @return the all by search string
     */
    @PostMapping("/api/public/getPriceTable")
    public PriceTableDto getAllBySearchString(@RequestParam String enumTableType) {
        return categoryService.findCategoriesForTableOrdered(EnumTableType.valueOf(enumTableType));
    }
}

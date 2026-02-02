package com.arfema.arfemarest.repository;

import com.arfema.arfemarest.entity.ContentEntity;
import com.arfema.arfemarest.util.ContentType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


/**
 * The interface Content repository.
 */
@Repository
public interface ContentRepository extends JpaRepository<ContentEntity, Long> {


    Page<ContentEntity> findAllByTitleContaining(String searchTerm, Pageable pageable);

    /**
     * Find all by content type order by created desc page.
     *
     * @param contentType the content type
     * @param pageable    the pageable
     * @return the page
     */
    Page<ContentEntity> findAllByContentTypeOrderByCreatedDesc(ContentType contentType, Pageable pageable);


    /**
     * Find all order by created desc page.
     *
     * @param pageable    the pageable
     * @return the page
     */
    Page<ContentEntity> findAllByOrderByCreatedDesc(Pageable pageable);

    /**
     * Find all by tags containing order by created desc page.
     *
     * @param tags     the tags
     * @param pageable the pageable
     * @return the page
     */
    Page<ContentEntity> findAllByTagsContainingOrderByCreatedDesc(String tags, Pageable pageable);

    /**
     * Find distinct by title containing or html content containing page.
     *
     * @param searchString  the search string
     * @param searchString1 the search string 1
     * @param pageable      the pageable
     * @return the page
     */
    Page<ContentEntity> findDistinctByTitleContainingOrHtmlContentContaining(String searchString, String searchString1, Pageable pageable);

    /**
     * Gets by tag.
     *
     * @param tag         the tag
     * @param pageRequest the page request
     * @return the by tag
     */
    @Query(value = "Select * From arfema.content where tags like CONCAT('%',?1,'%')",
            countQuery = "Select count(*) From arfema.content where tags like CONCAT('%',?1,'%')",
            nativeQuery = true)
    public Page<ContentEntity> getByTag( String tag, PageRequest pageRequest);

    /**
     * Fetches tags like query string
     *
     * @param input - query string
     * @return List<String>  of suggested tags,
     */
    @Query(value ="with taglist as (select string_to_table(tags,';') as tag from arfema.content) " +
            "select tag from taglist where tag like CONCAT(?1, '%') group by tag order by COUNT(*) desc limit 10", nativeQuery = true)
    public List<String> getSuggestTags(String input);
}

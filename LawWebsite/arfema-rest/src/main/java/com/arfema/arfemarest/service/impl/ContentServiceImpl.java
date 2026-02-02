package com.arfema.arfemarest.service.impl;

import com.arfema.arfemarest.dto.ContentDto;
import com.arfema.arfemarest.dto.PageContentDto;
import com.arfema.arfemarest.entity.ContentEntity;
import com.arfema.arfemarest.repository.ContentRepository;
import com.arfema.arfemarest.service.ContentService;
import com.arfema.arfemarest.util.ContentType;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.time.format.DateTimeFormatter;
import java.util.stream.Collectors;

/**
 * The type Content service.
 */
@Service
public class ContentServiceImpl implements ContentService {

    private final ContentRepository contentRepository;

    /**
     * Instantiates a new Content service.
     *
     * @param contentRepository  the content repository
     */
    @Autowired
    public ContentServiceImpl(ContentRepository contentRepository) {
        this.contentRepository = contentRepository;
    }

    @Override
    public PageContentDto getAllContent(int page, String searchTerm) {
        PageContentDto pageContentDto = new PageContentDto();
        Page<ContentEntity> contentPage;
        if (StringUtils.isEmpty(searchTerm))
        {
            contentPage = contentRepository.findAllByOrderByCreatedDesc(PageRequest.of(page-1, 20));
        }
        else
        {
            contentPage = contentRepository.findAllByTitleContaining(searchTerm,PageRequest.of(page-1, 20));
        }

        pageContentDto.setContentDtoList(contentPage.stream().map(this::fromEntity).collect(Collectors.toList()));
        pageContentDto.setMaxPages(contentPage.getTotalPages());
        return pageContentDto;
    }

    @Override
    public PageContentDto getAllNews(int page) {
        PageContentDto pageContentDto = new PageContentDto();
        Page<ContentEntity> contentPage = contentRepository.findAllByContentTypeOrderByCreatedDesc(ContentType.NEWS, PageRequest.of(page - 1, 5));
        pageContentDto.setContentDtoList(contentPage.stream().map(this::fromEntity).collect(Collectors.toList()));
        pageContentDto.setMaxPages(contentPage.getTotalPages());
        return pageContentDto;
    }

    @Override
    public PageContentDto getAllPractice(int page) {
        PageContentDto pageContentDto = new PageContentDto();
        Page<ContentEntity> contentPage = contentRepository.findAllByContentTypeOrderByCreatedDesc(ContentType.PRACTICE, PageRequest.of(page - 1, 5));
        pageContentDto.setContentDtoList(contentPage.stream().map(this::fromEntity).collect(Collectors.toList()));
        pageContentDto.setMaxPages(contentPage.getTotalPages());
        return pageContentDto;
    }

    @Override
    public ContentDto getContent(Long id) {
        return contentRepository.findById(id).map(this::fromEntity).orElse(null);
    }

    @Override
    public PageContentDto getAllTagged(String tag, int page) {
        PageContentDto pageContentDto = new PageContentDto();
        Page<ContentEntity> contentPage = contentRepository.getByTag(tag, PageRequest.of(page - 1, 5));
        pageContentDto.setContentDtoList(contentPage.stream().map(this::fromEntity).collect(Collectors.toList()));
        pageContentDto.setMaxPages(contentPage.getTotalPages());
        return pageContentDto;
    }

    @Override
    public PageContentDto getAllBySearchString(String searchString, int page) {
        PageContentDto pageContentDto = new PageContentDto();
        Page<ContentEntity> contentPage = contentRepository.findDistinctByTitleContainingOrHtmlContentContaining(searchString, searchString, PageRequest.of(page - 1, 5));
        pageContentDto.setContentDtoList(contentPage.stream().map(this::fromEntity).collect(Collectors.toList()));
        pageContentDto.setMaxPages(contentPage.getTotalPages());
        return pageContentDto;
    }


    private ContentDto fromEntity(ContentEntity entity) {
        ContentDto contentDto = new ContentDto();
        contentDto.setId(entity.getId());
        contentDto.setTitle(entity.getTitle());
        contentDto.setTags(entity.getTags());
        contentDto.setCreated(entity.getCreated().format(DateTimeFormatter.ofPattern("dd-MM-YYYY")));
        contentDto.setHtmlContent(entity.getHtmlContent());
        contentDto.setContentType(entity.getContentType().name());
        contentDto.setCrop(entity.getCrop());
        return contentDto;
    }

    private ContentEntity fromDto(ContentDto dto) {
        return null;
    }
}

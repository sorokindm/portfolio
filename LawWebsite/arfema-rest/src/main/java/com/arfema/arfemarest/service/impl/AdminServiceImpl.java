package com.arfema.arfemarest.service.impl;

import com.arfema.arfemarest.dto.ContentDto;
import com.arfema.arfemarest.entity.ContentEntity;
import com.arfema.arfemarest.repository.ContentRepository;
import com.arfema.arfemarest.service.AdminService;
import com.arfema.arfemarest.util.ContentType;
import com.arfema.arfemarest.util.EnumSuccessMessages;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class AdminServiceImpl implements AdminService {

    private final ContentRepository contentRepository;

    @Autowired
    public AdminServiceImpl(ContentRepository contentRepository) {
        this.contentRepository = contentRepository;
    }


    @Override
    public List<String> getSuggestTags(String input) {
        return contentRepository.getSuggestTags(input);
    }

    @Override
    public void addNewMedia(ContentDto contentDto) {
        ContentEntity contentEntity = new ContentEntity();
        contentEntity.setContentType(ContentType.valueOf(contentDto.getContentType()));
        contentEntity.setCreated(LocalDateTime.now());
        contentEntity.setHtmlContent(contentDto.getHtmlContent());
        contentEntity.setCrop(contentDto.getCrop());
        contentEntity.setTags(contentDto.getTags());
        contentEntity.setTitle(contentDto.getTitle());

        contentRepository.save(contentEntity);
    }

    @Override
    public EnumSuccessMessages editMedia(ContentDto contentDto) {
        ContentEntity contentEntity = contentRepository.findById(contentDto.getId()).orElse(null);
        if (contentEntity==null) return EnumSuccessMessages.NOT_FOUND;
        contentEntity.setContentType(ContentType.valueOf(contentDto.getContentType()));
        contentEntity.setHtmlContent(contentDto.getHtmlContent());
        contentEntity.setCrop(contentDto.getCrop());
        contentEntity.setTags(contentDto.getTags());
        contentEntity.setTitle(contentDto.getTitle());

        contentRepository.save(contentEntity);
        return EnumSuccessMessages.SUCCESS;
    }

    @Override
    public EnumSuccessMessages deleteMedia(Long id) {
         ContentEntity contentEntity=contentRepository.findById(id).orElse(null);
         if (contentEntity==null) return EnumSuccessMessages.NOT_FOUND;
         contentRepository.delete(contentEntity);
         return EnumSuccessMessages.SUCCESS;
    }
}

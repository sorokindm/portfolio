package com.arfema.arfemarest.service;

import com.arfema.arfemarest.dto.ContentDto;
import com.arfema.arfemarest.util.EnumSuccessMessages;

import java.util.List;

public interface AdminService {
    List<String> getSuggestTags(String input);

    void addNewMedia(ContentDto contentDto);

    EnumSuccessMessages editMedia(ContentDto contentDto);

    EnumSuccessMessages deleteMedia(Long id);
}

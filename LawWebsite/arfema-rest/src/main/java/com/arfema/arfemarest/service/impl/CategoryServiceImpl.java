package com.arfema.arfemarest.service.impl;

import com.arfema.arfemarest.dto.*;
import com.arfema.arfemarest.entity.CategoryEntity;
import com.arfema.arfemarest.entity.CategoryLinkEntity;
import com.arfema.arfemarest.entity.TableEntryEntity;
import com.arfema.arfemarest.entity.TableEntryLinkEntity;
import com.arfema.arfemarest.repository.CategoryRepository;
import com.arfema.arfemarest.repository.TableEntryRepository;
import com.arfema.arfemarest.service.CategoryService;
import com.arfema.arfemarest.util.EnumTableType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

/**
 * The type Category service.
 */
@Service
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;
    private final TableEntryRepository tableEntryRepository;

    /**
     * Instantiates a new Category service.
     *
     * @param categoryRepository   the category repository
     * @param tableEntryRepository the table entry repository
     */
    @Autowired
    public CategoryServiceImpl(CategoryRepository categoryRepository, TableEntryRepository tableEntryRepository) {
        this.categoryRepository = categoryRepository;
        this.tableEntryRepository = tableEntryRepository;
    }

    @Override
    public PriceTableDto findCategoriesForTableOrdered(EnumTableType tableType) {

        List<CategoryEntity> list = categoryRepository.findAllByEnumTableTypeOrderByRankingAsc(tableType);
        PriceTableDto priceTableDto = new PriceTableDto();
        priceTableDto.setCategoryDtoList(list.stream().map(this::getCategoryDto).collect(Collectors.toList()));
        return priceTableDto;
    }

    @Override
    public PriceSearchResultDto searchPrice(String searchTerm) {
        PriceSearchResultDto result = new PriceSearchResultDto();
        List<CategoryEntity> categories = categoryRepository.findAllByTitleContaining(searchTerm);
        categories.forEach(category -> category.setEntries(Collections.emptyList()));
        List<TableEntryEntity> entries = tableEntryRepository.findAllByTitleContaining(searchTerm);
        result.setCategories(categories.stream().map(this::getCategoryDto).collect(Collectors.toList()));
        result.setEntries(entries.stream().map(this::getTableEntryDto).collect(Collectors.toList()));
        return result;
    }

    @Override
    public void changePrice(Long id, String price) {
        TableEntryEntity entry = tableEntryRepository.findById(id).orElse(null);
        if (entry != null) {
            entry.setPrice(price);
            tableEntryRepository.save(entry);
        }
    }

    private TableEntryLinkDto getTableEntryLinkDto(TableEntryLinkEntity tableEntryLinkEntity) {
        TableEntryLinkDto tableEntryLinkDto = new TableEntryLinkDto();
        tableEntryLinkDto.setId(tableEntryLinkEntity.getId());
        tableEntryLinkDto.setLink(tableEntryLinkEntity.getLink());
        tableEntryLinkDto.setTitle(tableEntryLinkEntity.getTitle());
        tableEntryLinkDto.setText(tableEntryLinkEntity.getText());

        return tableEntryLinkDto;
    }

    private CategoryLinkDto getCategoryLinkDto(CategoryLinkEntity categoryLinkEntity) {
        CategoryLinkDto categoryLinkDto = new CategoryLinkDto();
        categoryLinkDto.setId(categoryLinkEntity.getId());
        categoryLinkDto.setLink(categoryLinkEntity.getLink());
        categoryLinkDto.setTitle(categoryLinkEntity.getTitle());
        categoryLinkDto.setText(categoryLinkEntity.getText());

        return categoryLinkDto;
    }

    private TableEntryDto getTableEntryDto(TableEntryEntity tableEntryEntity) {
        TableEntryDto tableEntryDto = new TableEntryDto();
        tableEntryDto.setId(tableEntryEntity.getId());
        tableEntryDto.setRank(tableEntryEntity.getRank());
        tableEntryDto.setTitle(Arrays.asList(tableEntryEntity.getTitle().split("(?=\\?\\d)|(?<=\\?\\d)")));
        tableEntryDto.setPrice(tableEntryEntity.getPrice());
        tableEntryDto.setLinks(tableEntryEntity.getLink().stream().map(this::getTableEntryLinkDto).collect(Collectors.toList()));

        return tableEntryDto;
    }

    private CategoryDto getCategoryDto(CategoryEntity categoryEntity) {
        CategoryDto categoryDto = new CategoryDto();
        categoryDto.setId(categoryEntity.getId());
        categoryDto.setTitle(Arrays.asList(categoryEntity.getTitle().split("(?=\\?\\d)|(?<=\\?\\d)")));
        categoryDto.setEnumTableType(categoryEntity.getEnumTableType().name());
        categoryDto.setRanking(categoryEntity.getRanking());
        categoryDto.setLinks(categoryEntity.getLinks().stream().map(this::getCategoryLinkDto).collect(Collectors.toList()));
        categoryDto.setEntries(categoryEntity.getEntries().stream().map(this::getTableEntryDto).collect(Collectors.toList()));
        return categoryDto;
    }
}

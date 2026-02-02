package com.arfema.arfemarest.util;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import org.apache.commons.lang3.StringUtils;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/**
 * The type Tags converter.
 */
@Converter
public class TagsConverter implements AttributeConverter<List<String>, String> {

    @Override
    public String convertToDatabaseColumn(List<String> attribute) {

        return attribute == null ? StringUtils.EMPTY : String.join(";", attribute);
    }

    @Override
    public List<String> convertToEntityAttribute(String dbData) {
        return StringUtils.isEmpty(dbData) ? Collections.emptyList() : Arrays.asList(dbData.split(";"));
    }

}

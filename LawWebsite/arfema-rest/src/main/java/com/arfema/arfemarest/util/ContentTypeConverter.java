package com.arfema.arfemarest.util;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import org.apache.commons.lang3.StringUtils;

/**
 * The type Content type converter.
 */
@Converter
public class ContentTypeConverter implements AttributeConverter<ContentType, String> {
    @Override
    public String convertToDatabaseColumn(ContentType attribute) {
        return attribute==null? ContentType.NOTYPE.name(): attribute.name();
    }

    @Override
    public ContentType convertToEntityAttribute(String dbData) {
        return StringUtils.isEmpty(dbData)?ContentType.NOTYPE: ContentType.valueOf(dbData);
    }
}

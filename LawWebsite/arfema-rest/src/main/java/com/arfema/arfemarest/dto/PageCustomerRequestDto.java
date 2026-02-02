package com.arfema.arfemarest.dto;

import java.util.List;

/**
 * The type Page customer request dto.
 */
public class PageCustomerRequestDto {
    /**
     * The Customer request dto list.
     */
    List<CustomerRequestDto> customerRequestDtoList;
    /**
     * The Max pages.
     */
    int maxPages;

    /**
     * Gets customer request dto list.
     *
     * @return the customer request dto list
     */
    public List<CustomerRequestDto> getCustomerRequestDtoList() {
        return customerRequestDtoList;
    }

    /**
     * Sets customer request dto list.
     *
     * @param customerRequestDtoList the customer request dto list
     */
    public void setCustomerRequestDtoList(List<CustomerRequestDto> customerRequestDtoList) {
        this.customerRequestDtoList = customerRequestDtoList;
    }

    /**
     * Gets max pages.
     *
     * @return the max pages
     */
    public int getMaxPages() {
        return maxPages;
    }

    /**
     * Sets max pages.
     *
     * @param maxPages the max pages
     */
    public void setMaxPages(int maxPages) {
        this.maxPages = maxPages;
    }
}

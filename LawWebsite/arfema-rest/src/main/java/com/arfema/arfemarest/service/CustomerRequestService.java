package com.arfema.arfemarest.service;

import com.arfema.arfemarest.dto.CreateCustomerRequestDto;
import com.arfema.arfemarest.dto.PageCustomerRequestDto;

/**
 * The interface Customer request service.
 */
public interface CustomerRequestService {

    /**
     * Add customer request boolean.
     *
     * @param customerRequestDto the customer request dto
     * @return the boolean
     */
    boolean addCustomerRequest(CreateCustomerRequestDto customerRequestDto);

    /**
     * Delete customer request.
     *
     * @param id the id
     */
    void deleteCustomerRequest(long id);

    /**
     * Mark read.
     *
     * @param id the id
     */
    void markRead(long id);

    /**
     * Mark unread.
     *
     * @param id the id
     */
    void markUnread(long id);

    /**
     * Gets all customer requests.
     *
     * @param page         the page
     * @param searchTerm   the search term
     * @param isOnlyUnread the is only unread
     * @return the all customer requests
     */
    PageCustomerRequestDto getAllCustomerRequests(int page,String searchTerm, boolean isOnlyUnread);
}

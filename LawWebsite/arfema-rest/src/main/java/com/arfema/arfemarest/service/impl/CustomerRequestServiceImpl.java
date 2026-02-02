package com.arfema.arfemarest.service.impl;

import com.arfema.arfemarest.dto.CreateCustomerRequestDto;
import com.arfema.arfemarest.dto.CustomerRequestDto;
import com.arfema.arfemarest.dto.PageCustomerRequestDto;
import com.arfema.arfemarest.entity.CustomerRequestEntity;
import com.arfema.arfemarest.repository.CustomerRequestRepository;
import com.arfema.arfemarest.service.CustomerRequestLimiterService;
import com.arfema.arfemarest.service.CustomerRequestService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.stream.Collectors;

/**
 * The type Customer request service.
 */
@Service
public class CustomerRequestServiceImpl implements CustomerRequestService {

    private final CustomerRequestRepository customerRequestRepository;
    private final CustomerRequestLimiterService customerRequestLimiterService;

    /**
     * Instantiates a new Customer request service.
     *
     * @param customerRequestRepository     the customer request repository
     * @param customerRequestLimiterService the customer request limiter service
     */
    @Autowired
    public CustomerRequestServiceImpl(CustomerRequestRepository customerRequestRepository, CustomerRequestLimiterService customerRequestLimiterService) {
        this.customerRequestRepository = customerRequestRepository;
        this.customerRequestLimiterService = customerRequestLimiterService;
    }


    @Override
    public boolean addCustomerRequest(CreateCustomerRequestDto customerRequestDto) {
        if (!customerRequestLimiterService.isRequestUnderLimit()) return false;
        CustomerRequestEntity customerRequestEntity = this.createEntityFromRequestDto(customerRequestDto);
        customerRequestRepository.save(customerRequestEntity);
        return true;
    }

    @Override
    public void deleteCustomerRequest(long id) {
        customerRequestRepository.deleteById(id);
    }

    @Override
    public void markRead(long id) {
        CustomerRequestEntity customerRequestEntity = customerRequestRepository.findById(id).orElseThrow(RuntimeException::new);
        customerRequestEntity.setRead(true);
        customerRequestRepository.save(customerRequestEntity);
    }

    @Override
    public void markUnread(long id) {
        CustomerRequestEntity customerRequestEntity = customerRequestRepository.findById(id).orElseThrow(RuntimeException::new);
        customerRequestEntity.setRead(false);
        customerRequestRepository.save(customerRequestEntity);
    }

    @Override
    public PageCustomerRequestDto getAllCustomerRequests(int page, String searchTerm, boolean isOnlyUnread) {
        PageRequest pageRequest = PageRequest.of(page - 1, 20);
        Page<CustomerRequestEntity> customerRequestEntityPage;
        if (StringUtils.isEmpty(searchTerm)) {
            customerRequestEntityPage = isOnlyUnread ? customerRequestRepository.findAllByIsReadOrderByCreatedDesc(false, pageRequest) : customerRequestRepository.findAllByOrderByCreatedDesc(pageRequest);
        } else {
            customerRequestEntityPage = isOnlyUnread ? customerRequestRepository.findAllByRequestContainingAndIsReadOrderByCreatedDesc(searchTerm, false, pageRequest) : customerRequestRepository.findAllByRequestContainingOrderByCreatedDesc(searchTerm, pageRequest);
        }

        PageCustomerRequestDto pageCustomerRequestDto = new PageCustomerRequestDto();
        pageCustomerRequestDto.setMaxPages(customerRequestEntityPage.getTotalPages());
        pageCustomerRequestDto.setCustomerRequestDtoList(customerRequestEntityPage.stream().map(this::fromEntity).collect(Collectors.toList()));
        return pageCustomerRequestDto;
    }

    private CustomerRequestEntity createEntityFromRequestDto(CreateCustomerRequestDto customerRequestDto) {
        CustomerRequestEntity customerRequestEntity = new CustomerRequestEntity();
        customerRequestEntity.setCreated(LocalDateTime.now());
        customerRequestEntity.setRead(false);
        customerRequestEntity.setName(customerRequestDto.getName());
        customerRequestEntity.setPhone(customerRequestDto.getPhone());
        customerRequestEntity.setEmail(customerRequestDto.getEmail());
        customerRequestEntity.setRequest(customerRequestDto.getRequest());
        return customerRequestEntity;
    }

    private CustomerRequestDto fromEntity(CustomerRequestEntity customerRequestEntity) {
        CustomerRequestDto customerRequestDto = new CustomerRequestDto();
        customerRequestDto.setId(customerRequestEntity.getId());
        customerRequestDto.setCreated(customerRequestEntity.getCreated().format(DateTimeFormatter.ofPattern("dd-MM-YYYY")));
        customerRequestDto.setName(customerRequestEntity.getName());
        customerRequestDto.setPhone(customerRequestEntity.getPhone());
        customerRequestDto.setEmail(customerRequestEntity.getEmail());
        customerRequestDto.setRequest(customerRequestEntity.getRequest());
        customerRequestDto.setRead(customerRequestEntity.isRead());

        return customerRequestDto;
    }
}

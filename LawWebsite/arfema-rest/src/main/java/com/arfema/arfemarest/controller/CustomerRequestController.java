package com.arfema.arfemarest.controller;

import com.arfema.arfemarest.dto.CreateCustomerRequestDto;
import com.arfema.arfemarest.service.CustomerRequestLimiterService;
import com.arfema.arfemarest.service.CustomerRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * The type Customer request controller.
 * Rest controller responsible for saving customer requests
 */
@RestController
public class CustomerRequestController {

    private final CustomerRequestService customerRequestService;

    /**
     * Instantiates a new Customer request controller.
     *
     * @param customerRequestService        the customer request service
     * @param customerRequestLimiterService the customer request limiter service
     */
    @Autowired
    public CustomerRequestController(CustomerRequestService customerRequestService, CustomerRequestLimiterService customerRequestLimiterService) {
        this.customerRequestService = customerRequestService;
    }

    /**
     * New customer request response entity.
     *
     * @param customerRequestDto the customer request dto
     * @return the response entity
     */
    @PostMapping("/api/public/newCustomerRequest")
    public ResponseEntity<Object> newCustomerRequest(@RequestBody CreateCustomerRequestDto customerRequestDto) {
        if (!customerRequestService.addCustomerRequest(customerRequestDto)) return ResponseEntity.status(429).build();
        return ResponseEntity.status(HttpStatus.OK).body("Успешно отправлено");
    }

    @PostMapping("/api/private/markReadRequest")
    public ResponseEntity<Object> markRead(@RequestParam Long id) {
        customerRequestService.markRead(id);
        return ResponseEntity.status(HttpStatus.OK).body("Успешно изменено");
    }

    @PostMapping("/api/private/deleteRequest")
    public ResponseEntity<Object> deleteRequest(@RequestParam Long id) {
        customerRequestService.deleteCustomerRequest(id);
        return ResponseEntity.status(HttpStatus.OK).body("Успешно удалено");
    }


}
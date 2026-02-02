package com.arfema.arfemarest.controller;

import com.arfema.arfemarest.dto.ContentDto;
import com.arfema.arfemarest.dto.PageCustomerRequestDto;
import com.arfema.arfemarest.dto.PriceSearchResultDto;
import com.arfema.arfemarest.service.AdminService;
import com.arfema.arfemarest.service.CategoryService;
import com.arfema.arfemarest.service.CustomerRequestService;
import com.arfema.arfemarest.util.EnumSuccessMessages;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

/**
 * The type Admin controller.
 */
@RestController
public class AdminController {

    private final AdminService adminService;
    private final CustomerRequestService customerRequestService;
    private final CategoryService categoryService;

    /**
     * Instantiates a new Admin controller.
     *
     * @param adminService           the admin service
     * @param customerRequestService the customer request service
     * @param categoryService        the category service
     */
    @Autowired
    public AdminController(AdminService adminService, CustomerRequestService customerRequestService, CategoryService categoryService) {
        this.adminService = adminService;
        this.customerRequestService = customerRequestService;
        this.categoryService = categoryService;
    }

    /**
     * Add new media response entity.
     *
     * @param contentDto the content dto
     * @return the response entity
     */
    @PostMapping("/api/private/addNewMedia")
    public ResponseEntity<String> addNewMedia(@RequestBody ContentDto contentDto) {
        adminService.addNewMedia(contentDto);
        return ResponseEntity.status(HttpStatus.OK).body("Успешно изменено");
    }

    /**
     * Edit media response entity.
     *
     * @param contentDto the content dto
     * @return the response entity
     */
    @PostMapping("/api/private/editMedia")
    public ResponseEntity<String> editMedia(@RequestBody ContentDto contentDto) {
        return adminService.editMedia(contentDto) == EnumSuccessMessages.SUCCESS ? ResponseEntity.status(HttpStatus.OK).body("Успешно изменено") :
                ResponseEntity.status(HttpStatus.NOT_FOUND).body("Контент не найден");
    }

    /**
     * Delete media response entity.
     *
     * @param contentDto the content dto
     * @return the response entity
     */
    @PostMapping("/api/private/deleteMedia")
    public ResponseEntity<String> deleteMedia(@RequestBody ContentDto contentDto) {
        return adminService.deleteMedia(contentDto.getId()) == EnumSuccessMessages.SUCCESS ? ResponseEntity.status(HttpStatus.OK).body("Успешно удалено") :
                ResponseEntity.status(HttpStatus.NOT_FOUND).body("Контент не найден");
    }

    /**
     * Suggest tag list.
     *
     * @param body the body
     * @return the list
     */
    @PostMapping("/api/private/suggestTag")
    public List<String> suggestTag(@RequestBody Map<String, Object> body) {
        return adminService.getSuggestTags(body.get("input").toString());
    }

    /**
     * Gets customer requests.
     *
     * @param page         the page
     * @param searchTerm   the search term
     * @param isOnlyUnread the is only unread
     * @return the customer requests
     */
    @PostMapping("/api/private/getCustomerRequests")
    public PageCustomerRequestDto getCustomerRequests(@RequestParam int page, @RequestParam String searchTerm, @RequestParam boolean isOnlyUnread) {
        return customerRequestService.getAllCustomerRequests(page, searchTerm, isOnlyUnread);
    }

    /**
     * Gets customer requests.
     *
     * @param searchTerm the search term
     * @return the customer requests
     */
    @PostMapping("/api/private/searchPriceData")
    public PriceSearchResultDto getCustomerRequests(@RequestParam String searchTerm) {
        return categoryService.searchPrice(searchTerm);
    }

    /**
     * Gets customer requests.
     *
     * @param id    the id
     * @param price the price
     */
    @PostMapping("/api/private/changePrice")
    public void getCustomerRequests(@RequestParam Long id, @RequestParam String price) {
        categoryService.changePrice(id, price);
    }
}

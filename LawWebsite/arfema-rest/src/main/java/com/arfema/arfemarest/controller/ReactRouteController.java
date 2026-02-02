package com.arfema.arfemarest.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * The type React route controller.
 */
@Controller
public class ReactRouteController {
    /**
     * Redirect single string.
     *
     * @return the string
     */
    @GetMapping(value = "/{path:[^.]*}")
    public String redirectSingle() {
        return "forward:/";
    }

    /**
     * Redirect nested string.
     *
     * @return the string
     */
    @GetMapping("/*/{path:[^.]*}")
    public String redirectNested() {
        return "forward:/";
    }
}

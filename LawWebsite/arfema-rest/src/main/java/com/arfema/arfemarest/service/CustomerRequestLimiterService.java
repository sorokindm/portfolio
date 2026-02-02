package com.arfema.arfemarest.service;

/**
 * The interface Customer request limiter service.
 */
public interface CustomerRequestLimiterService
{
    /**
     * Is request under limit boolean.
     *
     * @return the boolean
     */
    boolean isRequestUnderLimit();
}

package com.arfema.arfemarest.service.impl;

import com.arfema.arfemarest.service.CustomerRequestLimiterService;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;

/**
 * The type Customer request limiter service.
 */
@Service
@SessionScope
public class CustomerRequestLimiterServiceImpl implements CustomerRequestLimiterService
{
    /**
     * The Requests limit.
     */
    int requestsLimit = 2;

    @Override
    public boolean isRequestUnderLimit()
    {
        if (requestsLimit>0)
        {
            requestsLimit--;
            return true;
        }
        return false;
    }

    @Scheduled(cron = "0 * * * *")
    private void replenishLimit()
    {
        requestsLimit = 2;
    }
}

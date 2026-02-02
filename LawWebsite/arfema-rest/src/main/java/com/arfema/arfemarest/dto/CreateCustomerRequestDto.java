package com.arfema.arfemarest.dto;

/**
 * The type Create customer request dto.
 */
public class CreateCustomerRequestDto
{
    private String name;

    private String phone;

    private String email;

    private String request;

    /**
     * Gets name.
     *
     * @return the name
     */
    public String getName()
    {
        return name;
    }

    /**
     * Sets name.
     *
     * @param name the name
     */
    public void setName(String name)
    {
        this.name = name;
    }

    /**
     * Gets phone.
     *
     * @return the phone
     */
    public String getPhone()
    {
        return phone;
    }

    /**
     * Sets phone.
     *
     * @param phone the phone
     */
    public void setPhone(String phone)
    {
        this.phone = phone;
    }

    /**
     * Gets email.
     *
     * @return the email
     */
    public String getEmail()
    {
        return email;
    }

    /**
     * Sets email.
     *
     * @param email the email
     */
    public void setEmail(String email)
    {
        this.email = email;
    }

    /**
     * Gets request.
     *
     * @return the request
     */
    public String getRequest()
    {
        return request;
    }

    /**
     * Sets request.
     *
     * @param request the request
     */
    public void setRequest(String request)
    {
        this.request = request;
    }
}

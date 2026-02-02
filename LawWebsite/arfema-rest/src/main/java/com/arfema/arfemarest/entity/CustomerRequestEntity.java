package com.arfema.arfemarest.entity;


import jakarta.persistence.*;

import java.time.LocalDateTime;

/**
 * The type Customer request entity.
 */
@Entity
@Table(name = "CUSTOMER_REQUEST")
public class CustomerRequestEntity
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Column(name = "created")
    private LocalDateTime created;

    @Column(name = "name")
    private String name;

    @Column(name = "phone")
    private String phone;

    @Column(name = "email")
    private String email;

    @Column(name = "request")
    private String request;

    @Column(name = "isRead")
    private boolean isRead;

    /**
     * Gets id.
     *
     * @return the id
     */
    public Long getId()
    {
        return id;
    }

    /**
     * Sets id.
     *
     * @param id the id
     */
    public void setId(Long id)
    {
        this.id = id;
    }

    /**
     * Gets created.
     *
     * @return the created
     */
    public LocalDateTime getCreated()
    {
        return created;
    }

    /**
     * Sets created.
     *
     * @param created the created
     */
    public void setCreated(LocalDateTime created)
    {
        this.created = created;
    }

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

    /**
     * Is read boolean.
     *
     * @return the boolean
     */
    public boolean isRead()
    {
        return isRead;
    }

    /**
     * Sets read.
     *
     * @param read the read
     */
    public void setRead(boolean read)
    {
        isRead = read;
    }
}

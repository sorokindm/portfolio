package com.arfema.arfemarest.repository;

import com.arfema.arfemarest.entity.ContentEntity;
import com.arfema.arfemarest.entity.CustomerRequestEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRequestRepository extends JpaRepository<CustomerRequestEntity, Long>
{
    Page<CustomerRequestEntity> findAllByRequestContainingAndIsReadOrderByCreatedDesc(String searchTerm, boolean isRead, Pageable pageable);

    Page<CustomerRequestEntity> findAllByRequestContainingOrderByCreatedDesc(String searchTerm, Pageable pageable);

    Page<CustomerRequestEntity> findAllByIsReadOrderByCreatedDesc(boolean isRead, Pageable pageable);

    Page<CustomerRequestEntity> findAllByOrderByCreatedDesc(Pageable pageable);
}

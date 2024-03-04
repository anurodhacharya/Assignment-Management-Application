package com.aurickcode.AssignmentManagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aurickcode.AssignmentManagement.domain.Authority;

public interface AuthorityRepository extends JpaRepository<Authority, Long> {
    
}

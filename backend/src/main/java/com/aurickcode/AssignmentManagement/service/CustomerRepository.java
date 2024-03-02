package com.aurickcode.AssignmentManagement.service;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aurickcode.AssignmentManagement.domain.User;

public interface CustomerRepository extends JpaRepository<User, Long> {
    Optional<User> findUserByUsername(String username);
}

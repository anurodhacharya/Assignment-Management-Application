package com.aurickcode.AssignmentManagement.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aurickcode.AssignmentManagement.domain.Assignment;

import jakarta.persistence.Id;

public interface AssignmentRepository extends JpaRepository<Assignment, Long> {
    List<Assignment> findByUserId(Long id);
}

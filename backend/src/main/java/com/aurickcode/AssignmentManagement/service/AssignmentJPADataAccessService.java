package com.aurickcode.AssignmentManagement.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.aurickcode.AssignmentManagement.dao.AssignmentDAO;
import com.aurickcode.AssignmentManagement.domain.Assignment;
import com.aurickcode.AssignmentManagement.domain.User;
import com.aurickcode.AssignmentManagement.repository.AssignmentRepository;

@Repository
public class AssignmentJPADataAccessService implements AssignmentDAO {

    private final AssignmentRepository assignmentRepository;

    public AssignmentJPADataAccessService(AssignmentRepository assignmentRepository) {
        this.assignmentRepository = assignmentRepository;
    }

    public Assignment createAssignment(Assignment assignment) {
        return assignmentRepository.save(assignment);
    }

    @Override
    public List<Assignment> getAllAssignments(User user) {
        return assignmentRepository.findByUserId(user.getId());
    }

    @Override
    public Optional<Assignment> getAssignment(Long userId) {
        return assignmentRepository.findById(userId);
    }

    @Override
    public Assignment saveAssignment(Assignment assignment) {
        return assignmentRepository.save(assignment);
    }
}

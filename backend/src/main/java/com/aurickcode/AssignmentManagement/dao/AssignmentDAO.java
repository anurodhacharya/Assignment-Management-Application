package com.aurickcode.AssignmentManagement.dao;

import java.util.List;
import java.util.Optional;

import com.aurickcode.AssignmentManagement.domain.Assignment;
import com.aurickcode.AssignmentManagement.domain.User;

public interface AssignmentDAO {
    public Assignment createAssignment(Assignment assignment);
    public List<Assignment> getAllAssignments(User user);
    public Optional<Assignment> getAssignment(Long assignmentId);
    public Assignment saveAssignment(Assignment assignment);
}

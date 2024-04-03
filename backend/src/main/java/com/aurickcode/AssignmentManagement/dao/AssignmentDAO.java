package com.aurickcode.AssignmentManagement.dao;

import java.util.List;

import com.aurickcode.AssignmentManagement.domain.Assignment;
import com.aurickcode.AssignmentManagement.domain.User;

public interface AssignmentDAO {
    public Assignment saveAssignment(Assignment assignment);  
    public List<Assignment> getAllAssignments(User user); 
}

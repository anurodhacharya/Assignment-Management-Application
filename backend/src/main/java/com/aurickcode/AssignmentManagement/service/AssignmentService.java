package com.aurickcode.AssignmentManagement.service;

import java.util.List;
import java.util.Optional;

import org.springframework.expression.spel.ast.Assign;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.aurickcode.AssignmentManagement.dao.AssignmentDAO;
import com.aurickcode.AssignmentManagement.dao.UserDAO;
import com.aurickcode.AssignmentManagement.domain.Assignment;
import com.aurickcode.AssignmentManagement.domain.User;
import com.aurickcode.AssignmentManagement.dto.AssignmentDTO;

@Service
public class AssignmentService {
    
    private final AssignmentDAO assignmentDAO;
    // private final Authentication authentication;
    private final UserDAO userDAO;

    public AssignmentService(AssignmentDAO assignmentDAO,
    UserDAO userDAO
    // Authentication authentication
    ) {
        this.assignmentDAO = assignmentDAO;
        // this.authentication = authentication;
        this.userDAO = userDAO;
    }

    public Assignment saveAssignment(AssignmentDTO assignmentDTO, User user) {

        // String username = SecurityContextHolder.getContext().getAuthentication().getName();

        // User user = userDAO.getUser(username).orElseThrow(() -> new UsernameNotFoundException("Username not found"));
        
        Assignment assignment = new Assignment(
            assignmentDTO.status(),
            assignmentDTO.githubUrl(),
            assignmentDTO.branch(),
            assignmentDTO.codeReviewUrl(),
            user
        );

        return assignmentDAO.saveAssignment(assignment);
    }

    public List<Assignment> getAssignments(User user) {
        return assignmentDAO.getAllAssignments(user);
    }
}

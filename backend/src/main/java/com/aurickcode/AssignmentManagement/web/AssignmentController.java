package com.aurickcode.AssignmentManagement.web;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.aurickcode.AssignmentManagement.domain.Assignment;
import com.aurickcode.AssignmentManagement.domain.User;
import com.aurickcode.AssignmentManagement.dto.AssignmentDTO;
import com.aurickcode.AssignmentManagement.service.AssignmentService;

@RestController
@RequestMapping("/api/assignments")
public class AssignmentController {

    private final AssignmentService assignmentService;
    
    public AssignmentController(AssignmentService assignmentService) {
        this.assignmentService = assignmentService;
    }

    @PostMapping("")
    public ResponseEntity<?> createAssignment(@AuthenticationPrincipal User user
    ) {
        Assignment assignment = assignmentService.createNewAssignment(user);
        return ResponseEntity.ok().body(assignment);
    }

    @GetMapping("")
    public ResponseEntity<?> getAssignments(@AuthenticationPrincipal User user) {
        List<Assignment> assignments = assignmentService.getAssignments(user);
        return ResponseEntity.ok().body(assignments);
    }

    @GetMapping("{id}")
    public ResponseEntity<?> getAssignment(
                                    @PathVariable("id") Long userId
    ) {
        Assignment assignment = assignmentService.getAssignment(userId);
        return ResponseEntity.ok().body(assignment);
    }

    @PostMapping("{id}")
    public ResponseEntity<?> saveAssignent(@PathVariable("id") Long assignmentId, @RequestBody AssignmentDTO assignmentDTO) {
        Assignment assignment = assignmentService.saveAssignment(assignmentId, assignmentDTO);
        return ResponseEntity.ok(assignment);
    }
}

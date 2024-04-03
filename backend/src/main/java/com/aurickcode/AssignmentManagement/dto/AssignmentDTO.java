package com.aurickcode.AssignmentManagement.dto;

public record AssignmentDTO(
    String status,
    String githubUrl,
    String branch,
    String codeReviewUrl
) {
    
}

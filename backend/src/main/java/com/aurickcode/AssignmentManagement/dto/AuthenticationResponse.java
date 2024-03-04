package com.aurickcode.AssignmentManagement.dto;

import java.time.LocalDate;

public record AuthenticationResponse(
    Long id,
    String username,
    LocalDate cohortStartDate,
    String token
) 
{
}

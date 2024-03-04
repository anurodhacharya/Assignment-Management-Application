package com.aurickcode.AssignmentManagement.exception;

import java.time.LocalDateTime;

public record Error (
    String path,
    String message,
    int statusCode,
    LocalDateTime localDateTime
) {
}

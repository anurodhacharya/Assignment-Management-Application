package com.aurickcode.AssignmentManagement.service;

import java.util.Optional;

import com.aurickcode.AssignmentManagement.domain.User;

public interface UserDAO {
    public Optional<User> getUser(String username);
}

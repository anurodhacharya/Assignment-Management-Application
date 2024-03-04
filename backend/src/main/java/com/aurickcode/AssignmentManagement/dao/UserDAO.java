package com.aurickcode.AssignmentManagement.dao;

import java.util.Optional;

import com.aurickcode.AssignmentManagement.domain.User;

public interface UserDAO {
    public Optional<User> getUser(String username);
    public void registerUser(User user);
}

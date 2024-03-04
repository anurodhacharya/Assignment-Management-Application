package com.aurickcode.AssignmentManagement.service;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.aurickcode.AssignmentManagement.dao.UserDAO;
import com.aurickcode.AssignmentManagement.domain.User;
import com.aurickcode.AssignmentManagement.repository.UserRepository;


@Repository
public class UserJPADataAccessService implements UserDAO{
    
    private final UserRepository userRepository;

    public UserJPADataAccessService(UserRepository customerRepository) {
        this.userRepository = customerRepository;
    }

    public Optional<User> getUser(String username) {
        return userRepository.findUserByUsername(username);
    }

    @Override
    public void registerUser(User user) {
        userRepository.save(user);
    }

}

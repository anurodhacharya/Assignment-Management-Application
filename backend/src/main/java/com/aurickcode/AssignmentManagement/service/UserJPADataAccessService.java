package com.aurickcode.AssignmentManagement.service;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.aurickcode.AssignmentManagement.domain.User;


@Repository
public class UserJPADataAccessService implements UserDAO{
    
    private final CustomerRepository customerRepository;

    public UserJPADataAccessService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public Optional<User> getUser(String username) {
        return customerRepository.findUserByUsername(username);
    }

}

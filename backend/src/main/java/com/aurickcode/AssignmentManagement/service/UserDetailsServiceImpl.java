package com.aurickcode.AssignmentManagement.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.aurickcode.AssignmentManagement.domain.User;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserDAO userDAO;
    private final PasswordEncoder passwordEncoder;

    public UserDetailsServiceImpl(UserDAO userDAO, PasswordEncoder passwordEncoder) {
        this.userDAO = userDAO;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // return userDAO.getUser(username).orElseThrow(() -> new UsernameNotFoundException("Username not found"));
        User user = new User();
        user.setUsername(username);
        user.setPassword(passwordEncoder.encode("asdf"));
        user.setId(1L);
        return user;
    }
    
}

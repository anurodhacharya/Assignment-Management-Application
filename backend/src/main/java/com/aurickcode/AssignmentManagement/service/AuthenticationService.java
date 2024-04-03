package com.aurickcode.AssignmentManagement.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.aurickcode.AssignmentManagement.domain.User;
import com.aurickcode.AssignmentManagement.dto.AuthenticationRequest;
import com.aurickcode.AssignmentManagement.dto.AuthenticationResponse;
import com.aurickcode.AssignmentManagement.util.JwtUtil;

@Service
public class AuthenticationService {
    
    private final JwtUtil jwtUtil;
    private final AuthenticationManager authenticationManager;
    // DaoAuthenticationProvider
    
    public AuthenticationService(JwtUtil jwtUtil, AuthenticationManager authenticationManager) {
        this.jwtUtil = jwtUtil;
        this.authenticationManager = authenticationManager;
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        Authentication authentication = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                request.username(),
                request.password()
            )
        );
        
        User principal = (User) authentication.getPrincipal();
        String token = jwtUtil.generateToken(principal);
        
        return new AuthenticationResponse(
                principal.getId(),
                principal.getUsername(),
                principal.getCohortStartDate(), 
                token
            );
    }
}

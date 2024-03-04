package com.aurickcode.AssignmentManagement.web;

import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aurickcode.AssignmentManagement.dto.AuthenticationRequest;
import com.aurickcode.AssignmentManagement.dto.AuthenticationResponse;
import com.aurickcode.AssignmentManagement.service.AuthenticationService;

@RestController()
@RequestMapping("/api/auth")
public class AuthController {
    
    private final AuthenticationService authenticationService;

    public AuthController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping("login")
    public ResponseEntity<?> login(@RequestBody AuthenticationRequest request) {
        AuthenticationResponse response = authenticationService.authenticate(request);
        return ResponseEntity.ok().header(HttpHeaders.AUTHORIZATION, response.token()).body(response);
    }
}

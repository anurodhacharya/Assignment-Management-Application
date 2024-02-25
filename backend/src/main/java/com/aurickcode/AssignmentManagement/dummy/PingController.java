package com.aurickcode.AssignmentManagement.dummy;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PingController {

    @GetMapping("/ping")
    public String getPingPong() {
        return "Pong";
    }   
}

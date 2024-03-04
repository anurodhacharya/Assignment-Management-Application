package com.aurickcode.AssignmentManagement;

import java.time.LocalDate;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.aurickcode.AssignmentManagement.dao.AuthorityDAO;
import com.aurickcode.AssignmentManagement.dao.UserDAO;
import com.aurickcode.AssignmentManagement.domain.Authority;
import com.aurickcode.AssignmentManagement.domain.User;

@SpringBootApplication
public class AssignmentManagementApplication {
	public static void main(String[] args) {
		SpringApplication.run(AssignmentManagementApplication.class, args);
	}

	@Bean
	CommandLineRunner run(UserDAO userDAO, AuthorityDAO authorityDAO) {
		return args -> {
			User user = new User();
			user.setUsername("Anurodh");
			user.setPassword(new BCryptPasswordEncoder().encode("anurodh123"));
			user.setCohortStartDate(LocalDate.now());
			userDAO.registerUser(user);

			Authority authority = new Authority();
			authority.setAuthority("ROLE_STUDENT");
			authority.setUser(user);
			authorityDAO.registerAuthority(authority);
		};
	}
}

package com.aurickcode.AssignmentManagement.service;

import org.springframework.stereotype.Repository;

import com.aurickcode.AssignmentManagement.dao.AuthorityDAO;
import com.aurickcode.AssignmentManagement.domain.Authority;
import com.aurickcode.AssignmentManagement.repository.AuthorityRepository;

@Repository
public class AuthorityJPADataAccessService implements AuthorityDAO {

    private final AuthorityRepository authorityRepository;

    public AuthorityJPADataAccessService(AuthorityRepository authorityRepository) {
        this.authorityRepository = authorityRepository;
    }

    @Override
    public void registerAuthority(Authority authority) {
        authorityRepository.save(authority);
    }
}

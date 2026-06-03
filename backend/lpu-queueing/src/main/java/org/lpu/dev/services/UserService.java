package org.lpu.dev.services;


import org.lpu.dev.model.data.User;
import org.lpu.dev.model.dto.LoginRequest;
import org.lpu.dev.model.dto.LoginResponse;
import org.lpu.dev.repository.UserAccountsDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {

    @Autowired
    private UserAccountsDAO userAccountsDAO;
    
    public UserService(UserAccountsDAO userAccountsDAO) {
    	this.userAccountsDAO = userAccountsDAO;
    }

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Transactional
    public LoginResponse login(LoginRequest request) {

        User user = userAccountsDAO.findByUsername(request.getUsername());

        if (user == null) {
            return new LoginResponse(false, "User not found", null, null);
        }

        if (!passwordEncoder.matches(request.getPassword(), user.getPasswordHash())) {
            return new LoginResponse(false, "Invalid password", null, null);
        }

        return new LoginResponse(
                true,
                "Login successful",
                user.getRole(),
                user.getFullName()
        );
    }
}

package com.example.taskapp.config;

import com.example.taskapp.entity.User;
import com.example.taskapp.repository.UserRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer {

    private final UserRepository userRepository;

    public DataInitializer(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostConstruct
    public void init() {
        if (userRepository.findByUsername("admin").isEmpty()) {
            User admin = new User();
            admin.setUsername("admin");
            admin.setEmail("admin@mail.com");
            admin.setPassword("1234"); // ⚠️ В учебных целях пароль без шифрования
            userRepository.save(admin);
            System.out.println("✅ Admin user created: admin / 1234");
        } else {
            System.out.println("ℹ️ Admin user already exists");
        }
    }
}

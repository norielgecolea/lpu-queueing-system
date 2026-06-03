package org.lpu.dev;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.hibernate.SessionFactory;
import org.hibernate.boot.Metadata;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;


@Configuration
public class DBConfig {

    private static final Logger LOGGER = LogManager.getLogger(DBConfig.class);

    private StandardServiceRegistry ssr;

    @Value("${hibernate.config.file}")
    private String hibernateConfigFile;

    @PostConstruct
    public void init() {
        createSessionRegistry(hibernateConfigFile);
    }

    public boolean createSessionRegistry(String filename) {
        try {
            ssr = new StandardServiceRegistryBuilder()
                    .configure(filename)
                    .build();

            LOGGER.info("Hibernate Service Registry created successfully from file: {}", filename);
            return true;

        } catch (Exception e) {
            LOGGER.error("Error creating Hibernate Service Registry from file: {}", filename, e);
            return false;
        }
    }

    @Bean
    public SessionFactory sessionFactory() {
        try {
            if (ssr == null) {
                LOGGER.error("Service registry is not initialized before SessionFactory creation.");
                throw new IllegalStateException("Service registry must be initialized first.");
            }

            Metadata metadata = new MetadataSources(ssr).buildMetadata();
            SessionFactory sessionFactory = metadata.buildSessionFactory();

            LOGGER.info("SessionFactory created successfully.");

            return sessionFactory;

        } catch (Exception e) {
            LOGGER.error("Failed to create SessionFactory", e);
            throw new RuntimeException("SessionFactory initialization failed", e);
        }
    }

    @PreDestroy
    public void shutdown() {
        if (ssr != null) {
            StandardServiceRegistryBuilder.destroy(ssr);
            LOGGER.info("Hibernate Service Registry destroyed successfully.");
        }
    }
}
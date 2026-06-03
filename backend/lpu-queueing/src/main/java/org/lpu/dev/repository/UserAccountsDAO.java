package org.lpu.dev.repository;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.lpu.dev.model.data.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserAccountsDAO {

    @Autowired
    private SessionFactory sessionFactory;

    // Get current Hibernate session (transaction-managed by Spring)
    private Session getSession() {
        return sessionFactory.getCurrentSession();
    }

    // LOGIN METHOD
    public User findByUsername(String username) {

        Query<User> query = getSession().createQuery(
                "FROM User u WHERE u.username = :username",
                User.class
        );

        query.setParameter("username", username);

        return query.uniqueResult();
    }
}
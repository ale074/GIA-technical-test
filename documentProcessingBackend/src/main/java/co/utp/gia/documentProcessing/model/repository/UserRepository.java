package co.utp.gia.documentProcessing.model.repository;

import co.utp.gia.documentProcessing.model.entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
}

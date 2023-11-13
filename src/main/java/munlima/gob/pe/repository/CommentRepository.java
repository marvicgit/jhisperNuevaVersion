package munlima.gob.pe.repository;

import java.util.List;
import munlima.gob.pe.domain.Comment;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Comment entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    @Query("select comment from Comment comment where comment.login.login = ?#{principal.preferredUsername}")
    List<Comment> findByLoginIsCurrentUser();
}

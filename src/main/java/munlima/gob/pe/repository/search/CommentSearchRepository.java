package munlima.gob.pe.repository.search;

import co.elastic.clients.elasticsearch._types.query_dsl.QueryStringQuery;
import java.util.stream.Stream;
import munlima.gob.pe.domain.Comment;
import munlima.gob.pe.repository.CommentRepository;
import org.springframework.data.elasticsearch.client.elc.ElasticsearchTemplate;
import org.springframework.data.elasticsearch.client.elc.NativeQuery;
import org.springframework.data.elasticsearch.core.SearchHit;
import org.springframework.data.elasticsearch.core.query.Query;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.scheduling.annotation.Async;

/**
 * Spring Data Elasticsearch repository for the {@link Comment} entity.
 */
public interface CommentSearchRepository extends ElasticsearchRepository<Comment, Long>, CommentSearchRepositoryInternal {}

interface CommentSearchRepositoryInternal {
    Stream<Comment> search(String query);

    Stream<Comment> search(Query query);

    @Async
    void index(Comment entity);

    @Async
    void deleteFromIndexById(Long id);
}

class CommentSearchRepositoryInternalImpl implements CommentSearchRepositoryInternal {

    private final ElasticsearchTemplate elasticsearchTemplate;
    private final CommentRepository repository;

    CommentSearchRepositoryInternalImpl(ElasticsearchTemplate elasticsearchTemplate, CommentRepository repository) {
        this.elasticsearchTemplate = elasticsearchTemplate;
        this.repository = repository;
    }

    @Override
    public Stream<Comment> search(String query) {
        NativeQuery nativeQuery = new NativeQuery(QueryStringQuery.of(qs -> qs.query(query))._toQuery());
        return search(nativeQuery);
    }

    @Override
    public Stream<Comment> search(Query query) {
        return elasticsearchTemplate.search(query, Comment.class).map(SearchHit::getContent).stream();
    }

    @Override
    public void index(Comment entity) {
        repository.findById(entity.getId()).ifPresent(elasticsearchTemplate::save);
    }

    @Override
    public void deleteFromIndexById(Long id) {
        elasticsearchTemplate.delete(String.valueOf(id), Comment.class);
    }
}

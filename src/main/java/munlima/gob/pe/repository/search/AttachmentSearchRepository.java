package munlima.gob.pe.repository.search;

import co.elastic.clients.elasticsearch._types.query_dsl.QueryStringQuery;
import java.util.stream.Stream;
import munlima.gob.pe.domain.Attachment;
import munlima.gob.pe.repository.AttachmentRepository;
import org.springframework.data.elasticsearch.client.elc.ElasticsearchTemplate;
import org.springframework.data.elasticsearch.client.elc.NativeQuery;
import org.springframework.data.elasticsearch.core.SearchHit;
import org.springframework.data.elasticsearch.core.query.Query;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.scheduling.annotation.Async;

/**
 * Spring Data Elasticsearch repository for the {@link Attachment} entity.
 */
public interface AttachmentSearchRepository extends ElasticsearchRepository<Attachment, Long>, AttachmentSearchRepositoryInternal {}

interface AttachmentSearchRepositoryInternal {
    Stream<Attachment> search(String query);

    Stream<Attachment> search(Query query);

    @Async
    void index(Attachment entity);

    @Async
    void deleteFromIndexById(Long id);
}

class AttachmentSearchRepositoryInternalImpl implements AttachmentSearchRepositoryInternal {

    private final ElasticsearchTemplate elasticsearchTemplate;
    private final AttachmentRepository repository;

    AttachmentSearchRepositoryInternalImpl(ElasticsearchTemplate elasticsearchTemplate, AttachmentRepository repository) {
        this.elasticsearchTemplate = elasticsearchTemplate;
        this.repository = repository;
    }

    @Override
    public Stream<Attachment> search(String query) {
        NativeQuery nativeQuery = new NativeQuery(QueryStringQuery.of(qs -> qs.query(query))._toQuery());
        return search(nativeQuery);
    }

    @Override
    public Stream<Attachment> search(Query query) {
        return elasticsearchTemplate.search(query, Attachment.class).map(SearchHit::getContent).stream();
    }

    @Override
    public void index(Attachment entity) {
        repository.findById(entity.getId()).ifPresent(elasticsearchTemplate::save);
    }

    @Override
    public void deleteFromIndexById(Long id) {
        elasticsearchTemplate.delete(String.valueOf(id), Attachment.class);
    }
}

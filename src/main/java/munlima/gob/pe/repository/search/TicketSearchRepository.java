package munlima.gob.pe.repository.search;

import co.elastic.clients.elasticsearch._types.query_dsl.QueryStringQuery;
import java.util.List;
import java.util.List;
import munlima.gob.pe.domain.Ticket;
import munlima.gob.pe.repository.TicketRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.elasticsearch.client.elc.ElasticsearchTemplate;
import org.springframework.data.elasticsearch.client.elc.NativeQuery;
import org.springframework.data.elasticsearch.core.SearchHit;
import org.springframework.data.elasticsearch.core.SearchHits;
import org.springframework.data.elasticsearch.core.query.Query;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.scheduling.annotation.Async;

/**
 * Spring Data Elasticsearch repository for the {@link Ticket} entity.
 */
public interface TicketSearchRepository extends ElasticsearchRepository<Ticket, Long>, TicketSearchRepositoryInternal {}

interface TicketSearchRepositoryInternal {
    Page<Ticket> search(String query, Pageable pageable);

    Page<Ticket> search(Query query);

    @Async
    void index(Ticket entity);

    @Async
    void deleteFromIndexById(Long id);
}

class TicketSearchRepositoryInternalImpl implements TicketSearchRepositoryInternal {

    private final ElasticsearchTemplate elasticsearchTemplate;
    private final TicketRepository repository;

    TicketSearchRepositoryInternalImpl(ElasticsearchTemplate elasticsearchTemplate, TicketRepository repository) {
        this.elasticsearchTemplate = elasticsearchTemplate;
        this.repository = repository;
    }

    @Override
    public Page<Ticket> search(String query, Pageable pageable) {
        NativeQuery nativeQuery = new NativeQuery(QueryStringQuery.of(qs -> qs.query(query))._toQuery());
        return search(nativeQuery.setPageable(pageable));
    }

    @Override
    public Page<Ticket> search(Query query) {
        SearchHits<Ticket> searchHits = elasticsearchTemplate.search(query, Ticket.class);
        List<Ticket> hits = searchHits.map(SearchHit::getContent).stream().toList();
        return new PageImpl<>(hits, query.getPageable(), searchHits.getTotalHits());
    }

    @Override
    public void index(Ticket entity) {
        repository.findOneWithEagerRelationships(entity.getId()).ifPresent(elasticsearchTemplate::save);
    }

    @Override
    public void deleteFromIndexById(Long id) {
        elasticsearchTemplate.delete(String.valueOf(id), Ticket.class);
    }
}

package munlima.gob.pe.cucumber;

import io.cucumber.spring.CucumberContextConfiguration;
import munlima.gob.pe.IntegrationTest;
import org.springframework.test.context.web.WebAppConfiguration;

@CucumberContextConfiguration
@IntegrationTest
@WebAppConfiguration
public class CucumberTestContextConfiguration {}

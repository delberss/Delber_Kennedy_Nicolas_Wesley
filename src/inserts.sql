
--caminhos
BEGIN;
INSERT INTO caminhos(nome, descricao) VALUES('Backend','Back-end developers are the experts who build and maintain the mechanisms that process data and perform actions on websites. Unlike front-end developers, who control everything you can see on a website, back-end developers are involved in data storage, security, and other server-side functions that you cannot see');
INSERT INTO caminhos(nome, descricao) VALUES('Frontend','O desenvolvimento front-end da web é o desenvolvimento da interface gráfica do usuário de um site, por meio do uso de HTML, CSS e JavaScript, para que os usuários possam visualizar e interagir com aquele site');
COMMIT;
--topicos
-- comum
BEGIN;

INSERT INTO topicos(nome, descricao) VALUES('Internet','The Internet is a global network of computers connected to each other which communicate through a standardized set of protocols.');
INSERT INTO topicos(nome, descricao) VALUES('Sistemas de Controle de Versão','O que são e por que você deveria usar um');
--backend
INSERT INTO topicos(nome, descricao) VALUES('Conhecimento básico de Frontend','As a backend developer, you may not need to have proficient knowledge of the frontend stack but you should at least have some basic understanding of HTML, CSS and JavaScript.');
INSERT INTO topicos(nome, descricao) VALUES('OS e Conhecimentos Gerais','');
INSERT INTO topicos(nome, descricao) VALUES('Aprenda uma linguagem (Escolha uma)','Aprenda as peculiaridades. Detalhes sobre tempo de execução ex: concorrência, modelo de memória etc.');
INSERT INTO topicos(nome, descricao) VALUES('Bancos de Dados Relacionais','');
INSERT INTO topicos(nome, descricao) VALUES('Bancos de Dados NoSQL','');
INSERT INTO topicos(nome, descricao) VALUES('Mais sobre Bancos de Dados','');
INSERT INTO topicos(nome, descricao) VALUES('Aprenda sobre APIs','');
INSERT INTO topicos(nome, descricao) VALUES('Caching','');
INSERT INTO topicos(nome, descricao) VALUES('Conhecimentos de Segurança Web','');
INSERT INTO topicos(nome, descricao) VALUES('Teste','');
INSERT INTO topicos(nome, descricao) VALUES('CI/CD','');
INSERT INTO topicos(nome, descricao) VALUES('Principios de Desing e Desenvolvimento','');
INSERT INTO topicos(nome, descricao) VALUES('Padrões de Arquitetura','');
INSERT INTO topicos(nome, descricao) VALUES('Motores de Busca','');
INSERT INTO topicos(nome, descricao) VALUES('Conteinerização vs Virtualização','');
INSERT INTO topicos(nome, descricao) VALUES('Servidores Web','');
INSERT INTO topicos(nome, descricao) VALUES('Criando em Escala','Tópicos gerais que você deveria aprender e se importar sobre a sustentabilidade do produto');
-- frontend
INSERT INTO topicos(nome, descricao) VALUES('HTML','');
INSERT INTO topicos(nome, descricao) VALUES('CSS','');
INSERT INTO topicos(nome, descricao) VALUES('JavaScript','');
INSERT INTO topicos(nome, descricao) VALUES('Conhecimento de Segurança Web','');
INSERT INTO topicos(nome, descricao) VALUES('Gerenciamento de Pacotes','');
INSERT INTO topicos(nome, descricao) VALUES('Ferramentas de compilação','');
INSERT INTO topicos(nome, descricao) VALUES('Escolha um Framework','');
INSERT INTO topicos(nome, descricao) VALUES('CSS Moderno','');
INSERT INTO topicos(nome, descricao) VALUES('Components Web','');
INSERT INTO topicos(nome, descricao) VALUES('Frameworks CSS','');
INSERT INTO topicos(nome, descricao) VALUES('Testando seus Apps','Aprenda a diferença entre testes Unitários, Integrados, e Funcionais e aprenda a escrevê-los.');
INSERT INTO topicos(nome, descricao) VALUES('Progressive Web Apps','');
INSERT INTO topicos(nome, descricao) VALUES('Server Side Rendering(SSR)','');
INSERT INTO topicos(nome, descricao) VALUES('Gerados de Sites Estáticos','');
INSERT INTO topicos(nome, descricao) VALUES('Aplicações mobile','');
INSERT INTO topicos(nome, descricao) VALUES('Aplicações Desktop','');
INSERT INTO topicos(nome, descricao) VALUES('Web Assembly','Web Assembly ou WASM é o conjunto de instruções binarias gerado de linguagens de alto nível como GO,C,C++ ou Rust. É mais rápido que o JavaScript e o WASM 1.0 já está embarcado nos principais navegadores. O W3C o aceitou como padrõa oficial no fim de 2019.');

COMMIT;

BEGIN;
INSERT INTO caminhoContemTopico(caminho,topico) VALUES(1,1);
INSERT INTO caminhoContemTopico(caminho,topico) VALUES(1,2);
INSERT INTO caminhoContemTopico(caminho,topico) VALUES(1,3);
INSERT INTO caminhoContemTopico(caminho,topico) VALUES(1,4);
INSERT INTO caminhoContemTopico(caminho,topico) VALUES(1,5);
INSERT INTO caminhoContemTopico(caminho,topico) VALUES(1,6);
INSERT INTO caminhoContemTopico(caminho,topico) VALUES(1,7);
INSERT INTO caminhoContemTopico(caminho,topico) VALUES(1,8);
INSERT INTO caminhoContemTopico(caminho,topico) VALUES(1,9);
INSERT INTO caminhoContemTopico(caminho,topico) VALUES(1,10);
INSERT INTO caminhoContemTopico(caminho,topico) VALUES(1,11);
INSERT INTO caminhoContemTopico(caminho,topico) VALUES(1,12);
INSERT INTO caminhoContemTopico(caminho,topico) VALUES(1,13);
INSERT INTO caminhoContemTopico(caminho,topico) VALUES(1,14);
INSERT INTO caminhoContemTopico(caminho,topico) VALUES(1,15);
INSERT INTO caminhoContemTopico(caminho,topico) VALUES(1,16);
INSERT INTO caminhoContemTopico(caminho,topico) VALUES(1,17);
INSERT INTO caminhoContemTopico(caminho,topico) VALUES(1,18);
INSERT INTO caminhoContemTopico(caminho,topico) VALUES(1,19);
INSERT INTO caminhoContemTopico(caminho,topico) VALUES(2,1);
INSERT INTO caminhoContemTopico(caminho,topico) VALUES(2,2);
INSERT INTO caminhoContemTopico(caminho,topico) VALUES(2,20);
INSERT INTO caminhoContemTopico(caminho,topico) VALUES(2,21);
INSERT INTO caminhoContemTopico(caminho,topico) VALUES(2,22);
INSERT INTO caminhoContemTopico(caminho,topico) VALUES(2,11);
INSERT INTO caminhoContemTopico(caminho,topico) VALUES(2,24);
INSERT INTO caminhoContemTopico(caminho,topico) VALUES(2,25);
INSERT INTO caminhoContemTopico(caminho,topico) VALUES(2,26);
INSERT INTO caminhoContemTopico(caminho,topico) VALUES(2,27);
INSERT INTO caminhoContemTopico(caminho,topico) VALUES(2,28);
INSERT INTO caminhoContemTopico(caminho,topico) VALUES(2,29);
INSERT INTO caminhoContemTopico(caminho,topico) VALUES(2,30);
INSERT INTO caminhoContemTopico(caminho,topico) VALUES(2,31);
INSERT INTO caminhoContemTopico(caminho,topico) VALUES(2,32);
INSERT INTO caminhoContemTopico(caminho,topico) VALUES(2,33);
INSERT INTO caminhoContemTopico(caminho,topico) VALUES(2,34);
INSERT INTO caminhoContemTopico(caminho,topico) VALUES(2,35);
INSERT INTO caminhoContemTopico(caminho,topico) VALUES(2,36);
COMMIT;
--subtopicos
--internet
BEGIN;
INSERT INTO subtopicos(nome, descricao) VALUES('Como a internet funciona?','');
INSERT INTO subtopicos(nome, descricao) VALUES('O que é HTTP?','');
INSERT INTO subtopicos(nome, descricao) VALUES('Navegadores e como funcionam','');
INSERT INTO subtopicos(nome, descricao) VALUES('DNS e como ele funciona','');
INSERT INTO subtopicos(nome, descricao) VALUES('O que é nome de Dominio','');
INSERT INTO subtopicos(nome, descricao) VALUES('O que é hospedagem','');
--contr versão
INSERT INTO subtopicos(nome, descricao) VALUES('Uso Básico de Git','');
INSERT INTO subtopicos(nome, descricao) VALUES('GitHub','');
--conhecim  bas front 
INSERT INTO subtopicos(nome, descricao) VALUES('HTML','');
INSERT INTO subtopicos(nome, descricao) VALUES('CSS','');
INSERT INTO subtopicos(nome, descricao) VALUES('JavaScript','');
--os e gerais
INSERT INTO subtopicos(nome, descricao) VALUES('Uso do Terminal','');
INSERT INTO subtopicos(nome, descricao) VALUES('Como SOs funcionam no geral','');
INSERT INTO subtopicos(nome, descricao) VALUES('Gerenciamento de Processos','');
INSERT INTO subtopicos(nome, descricao) VALUES('Threads e Concorrência','');
INSERT INTO subtopicos(nome, descricao) VALUES('Comandos Básicos de Terminal','');
INSERT INTO subtopicos(nome, descricao) VALUES('Gerenciamento de Memória','');
INSERT INTO subtopicos(nome, descricao) VALUES('Comunicação entre processos','');
INSERT INTO subtopicos(nome, descricao) VALUES('Gerenciamento de I/O','');
INSERT INTO subtopicos(nome, descricao) VALUES('POSIX Básico','');
INSERT INTO subtopicos(nome, descricao) VALUES('Conceitos Básicos de Rede','');
--apren linguagem
INSERT INTO subtopicos(nome, descricao) VALUES('Rust','');
INSERT INTO subtopicos(nome, descricao) VALUES('Go','');
INSERT INTO subtopicos(nome, descricao) VALUES('Java','');
INSERT INTO subtopicos(nome, descricao) VALUES('C#','');
INSERT INTO subtopicos(nome, descricao) VALUES('PHP','');
INSERT INTO subtopicos(nome, descricao) VALUES('JavaScript','');
INSERT INTO subtopicos(nome, descricao) VALUES('Python','');
INSERT INTO subtopicos(nome, descricao) VALUES('Ruby','');
--db rela
INSERT INTO subtopicos(nome, descricao) VALUES('PostgreSQL','');
INSERT INTO subtopicos(nome, descricao) VALUES('MySQL','');
INSERT INTO subtopicos(nome, descricao) VALUES('MariaDB','');
INSERT INTO subtopicos(nome, descricao) VALUES('MS SQL','');
INSERT INTO subtopicos(nome, descricao) VALUES('Oracle','');
--nosql
INSERT INTO subtopicos(nome, descricao) VALUES('MongoDB','');
INSERT INTO subtopicos(nome, descricao) VALUES('RethinkDB','');
INSERT INTO subtopicos(nome, descricao) VALUES('CouchDB','');
INSERT INTO subtopicos(nome, descricao) VALUES('DynamoDB','');
--mais db
INSERT INTO subtopicos(nome, descricao) VALUES('ORMs','');
INSERT INTO subtopicos(nome, descricao) VALUES('ACID','');
INSERT INTO subtopicos(nome, descricao) VALUES('Trnsações','');
INSERT INTO subtopicos(nome, descricao) VALUES('Problema N+1','');
INSERT INTO subtopicos(nome, descricao) VALUES('Normalização de Dados','');
INSERT INTO subtopicos(nome, descricao) VALUES('Índices e como funcionam','');
--apis
INSERT INTO subtopicos(nome, descricao) VALUES('REST','');
INSERT INTO subtopicos(nome, descricao) VALUES('HATEOAS','');
INSERT INTO subtopicos(nome, descricao) VALUES('Open API Spec e Swagger','');
INSERT INTO subtopicos(nome, descricao) VALUES('Autenticação','');
INSERT INTO subtopicos(nome, descricao) VALUES('JSON APIs','');
INSERT INTO subtopicos(nome, descricao) VALUES('SOAP','');
--caching
INSERT INTO subtopicos(nome, descricao) VALUES('CDN','');
INSERT INTO subtopicos(nome, descricao) VALUES('Server Side','');
INSERT INTO subtopicos(nome, descricao) VALUES('Client Side','');
--conhecimento de seg
INSERT INTO subtopicos(nome, descricao) VALUES('HTTPS','');
INSERT INTO subtopicos(nome, descricao) VALUES('CORS','');
INSERT INTO subtopicos(nome, descricao) VALUES('SSL','');
--teste
INSERT INTO subtopicos(nome, descricao) VALUES('Teste de Integração','');
INSERT INTO subtopicos(nome, descricao) VALUES('Teste de Unidade','');
INSERT INTO subtopicos(nome, descricao) VALUES('Teste Funcional','');
--principios desenv
INSERT INTO subtopicos(nome, descricao) VALUES('Desenvolvimento Orientado a Testes','');
INSERT INTO subtopicos(nome, descricao) VALUES('Domain Driven Design','');
INSERT INTO subtopicos(nome, descricao) VALUES('SOLID','');
INSERT INTO subtopicos(nome, descricao) VALUES('KISS','');
--pad arqu
INSERT INTO subtopicos(nome, descricao) VALUES('Apps Monolíticos','');
INSERT INTO subtopicos(nome, descricao) VALUES('Microserviçõs','');
INSERT INTO subtopicos(nome, descricao) VALUES('Serverless','');
--motor busca
INSERT INTO subtopicos(nome, descricao) VALUES('Elasticsearch','');
INSERT INTO subtopicos(nome, descricao) VALUES('Solr','');
--cont vs virt
INSERT INTO subtopicos(nome, descricao) VALUES('Docker','');
--serv web
INSERT INTO subtopicos(nome, descricao) VALUES('Nginx','');
INSERT INTO subtopicos(nome, descricao) VALUES('Apache','');
-- escala
INSERT INTO subtopicos(nome, descricao) VALUES('Criando com Observabilidade em mente','Registo de métricas e outros itens que podem ajudar na depuração e solução de problemas quando algo dá errado.');
INSERT INTO subtopicos(nome, descricao) VALUES('Escala Horizontal vs Vertical','');
INSERT INTO subtopicos(nome, descricao) VALUES('Estratégias de Migração','');
COMMIT;

BEGIN;
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(1,1);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(1,2);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(1,3);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(1,4);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(1,5);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(1,6);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(2,7);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(2,8);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(3,9);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(3,10);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(3,11);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(4,12);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(4,13);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(4,14);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(4,15);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(4,16);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(4,17);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(4,18);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(4,19);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(4,20);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(4,21);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(5,22);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(5,23);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(5,24);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(5,25);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(5,26);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(5,27);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(5,28);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(5,29);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(6,30);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(6,31);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(6,32);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(6,33);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(6,34);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(7,35);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(7,36);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(7,37);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(7,38);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(8,39);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(8,40);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(8,41);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(8,42);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(8,43);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(8,44);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(9,45);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(9,46);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(9,47);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(9,48);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(9,49);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(9,50);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(10,51);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(10,52);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(10,53);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(11,54);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(11,55);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(11,56);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(12,57);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(12,58);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(12,59);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(14,60);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(14,61);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(14,62);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(14,63);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(15,64);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(15,65);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(15,66);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(16,67);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(16,68);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(17,69);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(18,70);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(18,71);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(19,72);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(19,73);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(19,74);

COMMIT;

BEGIN;
--html
INSERT INTO subtopicos(nome, descricao) VALUES('Aprenda o básico','');
INSERT INTO subtopicos(nome, descricao) VALUES('Escrevendo HTML Semântico','');
INSERT INTO subtopicos(nome, descricao) VALUES('Formulários e Validações','');
INSERT INTO subtopicos(nome, descricao) VALUES('Convenções e Boas Práticas','');
INSERT INTO subtopicos(nome, descricao) VALUES('Acessibilidade','');
INSERT INTO subtopicos(nome, descricao) VALUES('SEO Básico','');
--css
INSERT INTO subtopicos(nome, descricao) VALUES('Aprenda o básico','');
INSERT INTO subtopicos(nome, descricao) VALUES('Fazendo Layouts','');
INSERT INTO subtopicos(nome, descricao) VALUES('Design Responsivo e Media Queries','');
--js
INSERT INTO subtopicos(nome, descricao) VALUES('Sintaxe e Construções Básicas','');
INSERT INTO subtopicos(nome, descricao) VALUES('Aprenda a Manipular o DOM','');
INSERT INTO subtopicos(nome, descricao) VALUES('Aprenda Fetch API','');
INSERT INTO subtopicos(nome, descricao) VALUES('ES6+ e JavaScript modular ','');
INSERT INTO subtopicos(nome, descricao) VALUES('Outros Conceitos','');
--gerr paco
INSERT INTO subtopicos(nome, descricao) VALUES('npm','');
INSERT INTO subtopicos(nome, descricao) VALUES('yarn','');
--ferra compi
INSERT INTO subtopicos(nome, descricao) VALUES('Gerenciadores de Tarefas','');
INSERT INTO subtopicos(nome, descricao) VALUES('Linters e Formaters','');
INSERT INTO subtopicos(nome, descricao) VALUES('Empacotadores de módulo','');
--escolha um framework
INSERT INTO subtopicos(nome, descricao) VALUES('React.js','');
INSERT INTO subtopicos(nome, descricao) VALUES('Angular','');
INSERT INTO subtopicos(nome, descricao) VALUES('Vue.js','');
--css moderno
INSERT INTO subtopicos(nome, descricao) VALUES('Styled COmponent','');
INSERT INTO subtopicos(nome, descricao) VALUES('Módulos CS','');
INSERT INTO subtopicos(nome, descricao) VALUES('Styled JSX','');
--comp web
INSERT INTO subtopicos(nome, descricao) VALUES('HTML Templates','');
INSERT INTO subtopicos(nome, descricao) VALUES('Custom Elements','');
INSERT INTO subtopicos(nome, descricao) VALUES('Shadow DOM','');
--fram css
INSERT INTO subtopicos(nome, descricao) VALUES('Reactstrap','');
INSERT INTO subtopicos(nome, descricao) VALUES('Material UI','');
INSERT INTO subtopicos(nome, descricao) VALUES('Tailwind CSS','');
INSERT INTO subtopicos(nome, descricao) VALUES('Chakra UI','');
--testando app
INSERT INTO subtopicos(nome, descricao) VALUES('Jest','');
INSERT INTO subtopicos(nome, descricao) VALUES('react-testing-library','');
INSERT INTO subtopicos(nome, descricao) VALUES('Cypress','');
INSERT INTO subtopicos(nome, descricao) VALUES('Enzyme','');
--pwa
INSERT INTO subtopicos(nome, descricao) VALUES('Armazenamento','');
INSERT INTO subtopicos(nome, descricao) VALUES('Web sockets','');
INSERT INTO subtopicos(nome, descricao) VALUES('Service Workers','');
--ssr
INSERT INTO subtopicos(nome, descricao) VALUES('Next.js','');
INSERT INTO subtopicos(nome, descricao) VALUES('React.js','');
INSERT INTO subtopicos(nome, descricao) VALUES('Angular','');
INSERT INTO subtopicos(nome, descricao) VALUES('Vue.js','');
--Geradores de sites estaticos
INSERT INTO subtopicos(nome, descricao) VALUES('Next.js','');
INSERT INTO subtopicos(nome, descricao) VALUES('GatsbyJS','');
-- app mobile
INSERT INTO subtopicos(nome, descricao) VALUES('React Native','');
INSERT INTO subtopicos(nome, descricao) VALUES('Flutter','');
-- app desk
INSERT INTO subtopicos(nome, descricao) VALUES('Electron','');
COMMIT;

BEGIN;

INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(20,75);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(20,76);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(20,77);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(20,78);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(20,79);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(20,80);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(21,81);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(21,82);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(21,83);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(22,84);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(22,85);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(22,86);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(22,87);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(22,88);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(24,89);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(24,90);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(25,91);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(25,92);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(25,93);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(26,94);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(26,95);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(26,96);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(27,97);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(27,98);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(27,99);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(28,100);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(28,101);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(28,102);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(29,103);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(29,104);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(29,105);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(29,106);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(30,107);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(30,108);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(30,109);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(30,110);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(31,111);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(31,112);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(31,113);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(32,114);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(32,115);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(32,116);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(32,117);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(33,118);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(33,119);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(34,120);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(34,121);
INSERT INTO topicoContemSubtopico(topico,subtopico) VALUES(35,122);

COMMIT;


--INSERT INTO conteudos(tipo,link,titulo) VALUES('','','');
INSERT INTO conteudos(tipo,link,titulo) VALUES('texto','https://www.vox.com/2014/6/16/18076282/the-internet','A internet explicada');
INSERT INTO conteudos(tipo,link,titulo) VALUES('texto','http://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm','Como a internet funciona?');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video','https://roadmap.sh/guides/what-is-internet','Introdução a internet');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video','https://www.youtube.com/watch?v=TNQsmPf24go','Como a internet funciona?');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video','https://www.youtube.com/watch?v=7_LPdttKXPc','Como a internet funciona em 5 minutos');

--INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('','');

INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','1');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','2');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','3');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','4');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','5');


----------------------------- começa aqui


--ELECTRON------------


INSERT INTO conteudos(tipo,link,titulo) VALUES( 'texto','https://www.electronjs.org/docs/latest/ ','O que é Electron? ');
INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ','https://www.electronjs.org/ ','Aplicabilidade do Electron ');

----INTERNET: O QUE É HTTP?---------

INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ','https://canaltech.com.br/internet/o-que-e-http/ ','Como funciona o HTTP ');
INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ','https://rockcontent.com/br/blog/http/ ','Entenda a importância ');

------INTERNET: NAVEGADORES E COMO FUNCIONAM---------

INSERT INTO conteudos(tipo,link,titulo) VALUES('video ','https://www.youtube.com/watch?v=kDy62zaCHZE&ab_channel=AluraCursosOnline ','Funcionamento dos navegadores ');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ','https://www.youtube.com/watch?v=3yTDZTKwj-o&ab_channel=TecMundo','Entenda a importância ');

------INTERNET: DNS E COMO ELE FUNCIONA---------

INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ','https://aws.amazon.com/pt/route53/what-is-dns/#:~:text=O%20sistema%20DNS%20da%20internet,dom%C3%ADnio%20no%20navegador%20da%20web. ','O que é e como funciona ');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ','https://www.youtube.com/watch?v=XoLQHCPZS9s&ab_channel=HostGatorAcademy','Entenda a importância ');

------------------- O QUE É NOME DE DOMÍNIO ------------------------------------

INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ','https://support.google.com/a/answer/2573637?hl=pt-BR#Top ',' Noção básica de domínio');
INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ',' https://www.hostnet.com.br/blog/o-que-e-dominio-e-como-escolher-um-nome-para-o-seu-site/',' como escolher um domínio  ');

------INTERNET: O QUE É HOSPEDAGEM---------

INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ','https://www.hostgator.com.br/blog/o-que-e-uma-hospedagem-de-site/ ','Entendendo sobre hospedagem ');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ','https://www.youtube.com/watch?v=3unUNNbitzM&ab_channel=HostGatorAcademy ','Para que serve e como funciona');

------SISTEMAS DE CONTROLE DE VERSÃO:USO BÁSICO DE GIT ---------

INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ','https://www.hostinger.com.br/tutoriais/tutorial-do-git-basics-introducao ','Noções básicas sobre git ');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ','https://www.youtube.com/watch?v=za5KWZ5pRag&ab_channel=C%C3%B3digoFonteTV ','Visão geral sobre git');

------SISTEMAS DE CONTROLE DE VERSÃO:GITHUB ---------

INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ','https://www.hostinger.com.br/tutoriais/o-que-github ','O básico de Github ');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ','https://www.youtube.com/watch?v=2alg7MQ6_sI ','uso do github para iniciantes');

------CONHECIMENTO BÁSICO DE FRONTEND:HTML ---------

INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ','https://www.homehost.com.br/blog/tutoriais/o-que-e-html/ ','O que é o HTML? ');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ','https://www.youtube.com/watch?v=SV7TL0hxmIQ&ab_channel=MatheusBattisti-HoradeCodar ','Curso gratuito sobre HTML');

------CONHECIMENTO BÁSICO DE FRONTEND:CSS ---------

INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ','https://www.hostinger.com.br/tutoriais/tutorial-do-git-basics-introducao ','Noções básicas sobre git ');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ','https://www.youtube.com/watch?v=r11FflkQqJs&ab_channel=FelipeRocha%E2%80%A2dicasparadevs ','Curso gratuito de CSS');

------CONHECIMENTO BÁSICO DE FRONTEND:JAVASCRITP ---------

INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ','https://www.hostinger.com.br/tutoriais/tutorial-do-git-basics-introducao ','Noções básicas sobre git ');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ','https://www.youtube.com/watch?v=Ptbk2af68e8&t=1490s&ab_channel=CursoemV%C3%ADdeo ','Curso gratuito de JavaScript');

--------OS E CONHECIMENTOS GERAIS : USO DO TERMINAL--
INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ','https://www.lucascaton.com.br/2018/01/07/comandos-para-o-terminal-windows-macos-e-linux ','noção básica de terminal e comandos ');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ','https://www.youtube.com/watch?v=JEhVB4VHsTI ','Comandos básicos em terminal com ubuntu');

--------OS E CONHECIMENTOS GERAIS : COMO SOS FUNCIONAM NO GERAL--
INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ','https://tecnoblog.net/responde/ativar-modo-emergencia-sos-celular/ ','Noções básicas sobre SOS');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ','https://www.youtube.com/watch?v=Qjk-cSW-jk4&ab_channel=FabioAkita ','Visão geral');

------OS E CONHECIMENTOS GERAIS: GERENCIAMENTO DE PROCESSOS --------------
INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ','  https://ead.unisc.br/blog/gestao-de-processos#:~:text=Gest%C3%A3o%20de%20processos%20%C3%A9%20um,um%20produto%20para%20o%20consumidor. ',' Noção inicial do gerenciamento de processos   ');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ',' https://www.youtube.com/watch?v=gD22R5r7s9Y  ',' A gestão de processos com os negócios ');

------OS E CONHECIMENTOS GERAIS: THREADS E CONCORRÊNCIA ----------------------
INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ','  https://www.treinaweb.com.br/blog/concorrencia-paralelismo-processos-threads-programacao-sincrona-e-assincronaI ',' Noções básicas  ');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ',' https://www.youtube.com/watch?v=YvJbCydedV4  ',' Aula - Concorrência, paralelismo - threads');

------OS E CONHECIMENTOS GERAIS: COMANDOS BÁSICOS DE TERMINAL----------
INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ','  https://www.lucascaton.com.br/2018/01/07/comandos-para-o-terminal-windows-macos-e-linux',' comandos básicos no terminal  ');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ',' https://www.youtube.com/watch?v=JEhVB4VHsTI',' aula com comandos básicos de terminal ');

---------- OS E CONHECIMENTOS GERAIS:GERÊNCIAMENTO DE MEMÓRIA------------------------

INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ','https://sites.google.com/site/proffernandosiqueiraso/aulas/9-gerencia-de-memoria',' Visão geral');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ','https://www.youtube.com/watch?v=9AK_1gqEfkQ&ab_channel=FabioAkita ',' Entenda o básico');

------- OS E CONHECIMENTOS GERAIS:COMUNICAÇÃO ENTRE PROCESSOS ----------

INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ','https://homepages.dcc.ufmg.br/~fsantos/ECO036/comunicacao-Sockets.pdf ',' Noção inicial de comunicação entre processos ');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ','https://www.youtube.com/watch?v=uPMaNFlBXzI ','aula de comunicação entre processos');

----------- OS E CONHECIMENTOS GERAIS:GERENCIAMENTO DE I/O --------------------------

INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ','  https://joaoricardao.files.wordpress.com/2012/07/gerenciamento-i-o.pdf',' O que é? ');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ',' https://www.youtube.com/watch?v=P3qNph_HzXo&ab_channel=PedroLuiz ',' Visão geral');
 
----------------- OS E CONHECIMENTOS GERAIS:POSIX BÁSICO ----------------------------------------------

INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ','https://www.techtarget.com/whatis/definition/POSIX-Portable-Operating-System-Interface ',' O que é PORSIX ');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ',' https://www.youtube.com/watch?v=gfpblqOY6bs',' Entendendo o PORSIX ');

----- OS E CONHECIMENTOS GERAIS: CONCEITOS BÁSICOS DE REDE ----------------------------------------

INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ','  https://xtech.com.br/Blog/Conceitos-Basicos-De-Rede-O-Que-Voce-Precisa-Saber/b/39/#:~:text=A%20rede%20funciona%20conectando%20computadores,bem%20como%20com%20outras%20redes.',' O que você precisa saber  ');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ','https://www.youtube.com/watch?v=jMZF5ZjbA7A&ab_channel=B%C3%B3sonTreinamentos ',' 10 conceitos de redes');

------APRENDA UMA LINGUAGEM : RUST --------------------------
--INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ',' LINKAQUI''  TITULOAQUI ');
--INSERT INTO conteudos(tipo,link,titulo) VALUES('video ',' LINKAQUI','  TITULOAQUI ');

-------------APRENDA UMA LINGUAGEM :  GO ------------------------------

INSERT INTO conteudos(tipo,link,titulo) VALUES('video ',' https://www.youtube.com/watch?v=KfCNyIrqjsg&ab_channel=AluraCursosOnline', ' O que é e para que serve?');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ','https://www.youtube.com/watch?v=WiGU_ZB-u0w&list=PLCKpcjBB_VlBsxJ9IseNxFllf-UFEXOdg&ab_channel=AprendaGo',  'Curso sobre GO');

-----------APRENDA UMA LINGUAGEM:  JAVA --------------------------------------------------
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ','https://www.youtube.com/watch?v=sZAxLRMxEUo&ab_channel=C%C3%B3digoFonteTV', ' Visão geral de JAVA');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ','https://www.youtube.com/watch?v=sTX0UEplF54&list=PLHz_AreHm4dkI2ZdjTwZA4mPMxWTfNSpR&ab_channel=CursoemV%C3%ADdeo', ' Curso sobre JAVA');

----------------APRENDA UMA LINGUAGEM : C# ------------------------------------

INSERT INTO conteudos(tipo,link,titulo) VALUES('video',' https://www.youtube.com/watch?v=NXVQasys0B8&ab_channel=C%C3%B3digoFonteTV ', 'Visão geral de C# ');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video',' https://www.youtube.com/watch?v=PKMm-cHe56g&ab_channel=VictorLima-GuiadoProgramador ', 'Curso sobre C# ');

------------------APRENDA UMA LINGUAGEM:  PHP ------------------------------

INSERT INTO conteudos(tipo,link,titulo) VALUES('video ','https://www.youtube.com/watch?v=AqDj3OSV0mM&ab_channel=C%C3%B3digoFonteTV',  'Visão geral sobre PHP ');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ','https://www.youtube.com/watch?v=bGUuPgEn4U4&list=PL2Fdisxwzt_cOvOTUJhwEOxNV59wTs3ac&ab_channel=Programa%C3%A7%C3%A3oWeb','Curso sobre PHP ');

----------------------APRENDA UMA LINGUAGEM : JAVASCRIPT ------------------------

INSERT INTO conteudos(tipo,link,titulo) VALUES('video ',' https://www.youtube.com/watch?v=P39AO9T9bio',  'Por que aprender JavaScript');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ',' https://www.youtube.com/watch?v=BXqUH86F-kA&list=PLntvgXM11X6pi7mW0O4ZmfUI1xDSIbmTm',  'Curso de Javascript');

----------------------APRENDA UMA LINGUAGEM : PYTHON --------------------------------

INSERT INTO conteudos(tipo,link,titulo) VALUES('video ',' https://www.youtube.com/watch?v=LsRDACTZK_0',  'Por que aprender Python');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video','https://www.youtube.com/watch?v=S9uPNppGsGo&list=PLvE-ZAFRgX8hnECDn1v9HNTI71veL3oW0', 'Curso de Python');

----------------APRENDA  UMA LINGUAGEM : RUBY--------------------------------------------
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ',' https://www.youtube.com/watch?v=D8rIn9Ti8c0', ' Por que aprender Ruby');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video','https://www.youtube.com/watch?v=ZHPondVB9RQ&list=PLe3LRfCs4go-mkvHRMSXEOG-HDbzesyaP', 'Curso de Ruby');

-----------BANCO DE DADOS RELACIONAIS : POSTGRESQL-----------------

INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ',' https://4linux.com.br/o-que-e-postgresql/#:~:text=PostgreSQL%20%C3%A9%20um%20sistema%20gerenciador,bancos%20de%20dados%20comerciais%20mais','  O que é e para que serve ');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ',' https://www.youtube.com/watch?v=Z_SPrzlT4Fc&list=PLucm8g_ezqNoAkYKXN_zWupyH6hQCAwxY&ab_channel=B%C3%B3sonTreinamentos','  Curso sobre POSTGRESQL ');

-------------BANCO DE DADOS RELACIONAIS : MYSQL -------------------

INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ',' https://www.hostinger.com.br/tutoriais/o-que-e-mysql','  O que é ');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ',' https://www.youtube.com/watch?v=Ofktsne-utM&list=PLHz_AreHm4dkBs-795Dsgvau_ekxg8g1r&ab_channel=CursoemV%C3%ADdeo','  Curso sobre MYSQL ');

------------- BANCO DE DADOS RELACIONAIS : MARIADB ---------------------------

INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ',' https://rockcontent.com/br/blog/mariadb/','  MariaDB ou MySQL? ');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ',' https://www.youtube.com/watch?v=RjtdDlSLDPA&ab_channel=ChronosDicasTech','  Introdução ');

------------- BANCO DE DADOS RELACIONAIS : MS SQL --------------------

INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ',' https://king.host/wiki/artigo/acessar-banco-mssql-via-sql-managment-studio/','  Sobre MS SQL');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ',' https://www.youtube.com/watch?v=86Bgna7JKB8&ab_channel=ProgramadorM%C3%B3vel','  Banco de Dados MS SQL ');

------------ BANCO DE DADOS RELACIONAIS : ORACLE  -------------------------------------

INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ','https://www.devmedia.com.br/guia/tecnologia-oracle/34365', ' Guia incial de Oracle');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ',' https://www.youtube.com/watch?v=fclVMUUxLSA',' Aula de Oracle');

------------ CONHECIMENTOS DE SEGURANÇA WEB: HTTPS ---------------------------------
INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ',' https://www.remessaonline.com.br/blog/https-o-que-e-e-qual-a-sua-importancia-para-a-seguranca-do-seu-site/','  O que é e qual sua importância ');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ',' https://www.youtube.com/watch?v=G9VlDTshk-k&ab_channel=Dicion%C3%A1riodeInform%C3%A1tica','  HTTP e HTTPs ');

------------ CONHECIMENTOS DE SEGURANÇA WEB: CORS ---------------------------------
INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ',' https://www.treinaweb.com.br/blog/o-que-e-cors-e-como-resolver-os-principais-erros','  O que é? ');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ',' https://www.youtube.com/watch?v=GZV-FUdeVwE&ab_channel=C%C3%B3digoFonteTV','  CORS em 6 minutos ');

------------ CONHECIMENTOS DE SEGURANÇA WEB: SSL ---------------------------------
INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ',' https://serasa.certificadodigital.com.br/blog/ssl/o-que-e-ssl-entenda-a-importancia-para-a-seguranca-do-seu-site/','  O que é o SSL');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ',' https://www.hostgator.com.br/blog/o-que-e-certificado-ssl-e-porque-voce-deve-utilizar-no-seu-site/','  O que é o SSL');

------------ HTML: APRENDA O BÁSICO ---------------------------------
INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ',' https://www.homehost.com.br/blog/tutoriais/html-basico/',' Conhecimento básico de HTML');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ',' https://www.youtube.com/watch?v=SV7TL0hxmIQ','  Aula inicial de HTML');


------------ HTML: ESCREVENDO HTML SEM NTICO ---------------------------------
INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ',' https://www.devmedia.com.br/html-semantico-conheca-os-elementos-semanticos-da-html5/38065','  Elementos semânticos do HTML');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ',' https://www.youtube.com/watch?v=HaSgt1hK2Fs','  Aula de semântica do HTML');

------------ HTML: FORMULÁRIOS E VALIDAÇÕES ---------------------------------
INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ',' https://www.devmedia.com.br/html5-validator-validando-formularios-com-html5/28785','  Formulário e validação no HTML');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ',' https://www.youtube.com/watch?v=tZ7MEuygnU8','  Aula de formuçário e validação');

------------ HTML: CONVENÇÕES E BOAS PRÁTICAS ---------------------------------
INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ',' https://kinsta.com/pt/blog/melhores-praticas-html/','  convenções e boas práticas');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ',' https://www.youtube.com/watch?v=TBplwrsUj4s','  Aula de boas práticas para se escrever HTML');

------------ HTML: ACESSIBILIDADE ---------------------------------
INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ',' https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML','  A ideia de acessibilidade no HTML');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ',' https://developer.mozilla.org/pt-BR/docs/Learn/Accessibility','  Video sobre a acessibilidade');

------------ HTML: SEO BÁSICO ---------------------------------
INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ',' https://www.infowester.com/seo.php','  O básico de SEO');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ',' https://www.youtube.com/watch?v=qAJEoY4V5nI','  SEO para o HTML');


------------ CSS: APRENDA O BÁSICO ---------------------------------
INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ',' https://www.hostinger.com.br/tutoriais/o-que-e-css-guia-basico-de-css#:~:text=O%20CSS%20separa%20o%20conte%C3%BAdo,telas%20e%20assim%20por%20diante.','  O inicial de CSS');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ','https://www.hostinger.com.br/tutoriais/o-que-e-css-guia-basico-de-css',' Básico de CSS');

------------ CSS: FAZENDO LAYOUTS ---------------------------------
INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ',' https://developer.mozilla.org/pt-BR/docs/Learn/CSS/CSS_layout','  Aprenda a estilizar HTML utilizando CSS ');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ',' https://blog.matheuscastiglioni.com.br/criando-layouts-com-css-grid-layout/','  Criando layouts com CSS');

------------ CSS: DESIGN RESPONSIVO E MEDIA QUERIES ---------------------------------
INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ',' https://www.freecodecamp.org/portuguese/news/tutorial-de-media-queries-do-css-resolucoes-padrao-breakpoints-do-css-e-tamanhos-de-telefone/','  Tutorial de media queries do CSS ');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ',' https://www.youtube.com/watch?v=AltqAPZzAqo&ab_channel=Origamid','  Como utilizar Media Queries ');


------------ JAVASCRIPT: SINTAXE E CONSTRUÇÕES BÁSICAS ---------------------------------
INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ',' http://devfuria.com.br/javascript/sintaxe-basica/','  O básico que você precisa saber ');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ',' https://www.youtube.com/watch?v=z7gvyMe0VQI&ab_channel=ProfessorErmogenesPalacio','  Tudo sobre sintaxe e estruturas básicas');

------------ JAVASCRIPT: APRENDA A MANIPULAR O DOM ---------------------------------
INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ',' http://devfuria.com.br/javascript/dom-manipulando-o-dom/','  Como funciona ');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ',' https://www.youtube.com/watch?v=UftSB4DaRU4&ab_channel=Rocketseat ','  Utilização na prática ');

------------ JAVASCRIPT: APRENDA FETCH API ---------------------------------
INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ',' https://www.devmedia.com.br/javascript-fetch/41206','  Entenda básico ');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ',' https://www.youtube.com/watch?v=1d5jNmKdwlY&ab_channel=Ot%C3%A1vioMiranda','  Uso de Fetch API ');

------------ JAVASCRIPT: ES6+ E JAVASCRIPT MODULAR ---------------------------------
INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ',' https://medium.com/trainingcenter/entendendo-m%C3%B3dulos-no-javascript-73bce1d64dbf','  Entendendo módulos ES6 ');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ',' https://www.youtube.com/watch?v=vylVbb2PY0M&ab_channel=TiagoMatos','  Reutilizando funções ');

------------ JAVASCRIPT: OUTROS CONCEITOS ---------------------------------
INSERT INTO conteudos(tipo,link,titulo) VALUES('texto ',' https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript','  Desenvolvimento JavaScript ');
INSERT INTO conteudos(tipo,link,titulo) VALUES('video ',' https://www.youtube.com/watch?v=qfIWd6715tI&ab_channel=Felipe-DevSamurai','  JavaScript antes do React ');


INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','1');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','2');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','3');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','4');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','5');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','6');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','7');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','8');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','9');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','10');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','11');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','12');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','13');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','14');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','15');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','16');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','17');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','18');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','19');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','20');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','21');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','22');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','23');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','24');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','25');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','26');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','27');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','28');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','29');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','30');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','31');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','32');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','33');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','34');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','35');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','36');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','37');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','38');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','39');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','40');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','41');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','42');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','43');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','44');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','45');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','46');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','47');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','48');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','49');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','50');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','51');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','52');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','53');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','54');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','55');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','56');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','57');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','58');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','59');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','50');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','61');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','62');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','63');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','64');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','65');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','66');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','67');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','68');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','69');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','70');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','71');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','72');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','73');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','74');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','75');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','76');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','77');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','78');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','79');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','80');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','81');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','82');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','83');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','84');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','85');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','86');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','87');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','88');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','89');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','90');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','91');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','92');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','93');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','94');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','95');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','96');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','97');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','98');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','99');
INSERT INTO subtopicoContemConteudo (subtopico ,conteudo) VALUES('1','100');

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


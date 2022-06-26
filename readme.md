Todos os metodos precisam contem um parametro chamado pword com valor senha123
 as outras informações são passadas no body do request // chamadas do tipo GET os dado são passados da mesma forma que a pword não no body do request

exemplo  : "https://trabalhoengsw.herokuapp.com/usuarios/get/all?pword=senha123"

app.url = https://trabalhoengsw.herokuapp.com/  


------ cat inserts.sql |heroku pg:psql --app trabalhoengsw

#  Informações abaixo estão desatualizadas

| rota          | parametros    | retorna | descricao | tipo http|
| :-------------: |:-------------:|:---------:|:-----------:|:-------:|
|#|**BD**|||
| 'app.url/createDb'      | --    | 'ok | cria o banco de dados  só é usado uma vez para criar as tabelas |GET|
|#|**Usuarios**|||
|'app.url/usuarios/login' | email, senha | json com info usuario | retorna o usuario se a combinacao de usuario e senha existirem no bd| GET|
'app.url/usuarios/insert' |nome,email, senha. experiencia(int), caminhoAtual (int), caminhoFront(json), caminhoBack (json) | 'ok'| cria um novo usuarios| POST|
|'app.url/usuarios/get/all' | -- | json com todos os usuarios | | GET|
|'app.url/usuarios/get' | id (int) | json com um usuarios especifico || GET|
|'app.url/usuarios/ranking/get/' | -- | json usuarios ordenados pela exp| | GET|
|'app.url/usuarios/edit' | nome, email, senha. experiencia (int), caminhoAtual (int), caminhoFront (json),caminhoBack(json), id(int) | 'ok' | edita um usuario| PUT|
|'app.url/usuarios/delete' | id (int) | 'ok' | deleta um usuario| DELETE|
| # |**CAMINHOS** | | | |
'app.url/caminhos/insert'  | nome, descricao, numeroTopicos (int) | 'ok | para inserir um caminho no bd| POST|
|'app.url/caminhos/get/all'  | -- | json com todos os caminhos | retorna todos os  caminhos cadastrados| GET|
|'app.url/caminhos/get'  | id (int)  | json de um caminho  | busca um caminho especifico| GET|
|'app.url/caminhos/edit'| nome,descricao,numeroTopicos(int),id (int) | 'ok' | para editar um caminho | PUT|
|'app.url/caminhos/delete'| id(int) | 'ok' | deleta um caminho do bd | DELETE|
|'app.url/caminhos/get/subtopicos/all'| ----- | ---- | **ainda falta ser implementado** | GET|
|#|**TOPICOS**|||
|'app.url/topicos/insert'|nome,descricao,caminho(int)| |insere um novo topico e cria a relação de um topico a um caminho| POST|
|'app.url/topicos/insertRelation'|idTopico, idCaminho| |vincula um topico e um caminho já existentes um ao outro|POST|
|'app.url/topicos/get/all'  | -- | json com todos os  topicos | retorna todos os  topicos cadastrados| GET|
|'app.url/topicos/get'  | id (int)  | json de um topicos  | busca um topico especifico| GET|
|'app.url/topicos/edit'| nome,descricao,numeroTopicos(int), id(int) | 'ok' | para editar um topicos | PUT|
|'app.url/topicos/delete'| id(int) | 'ok' | deleta um topicos do bd | DELETE|
|#|**SUB - TOPICOS**|||
|'app.url/topicos/insert'|nome,descricao,topico(int)|| insere um novo subtopico e cria a relação de um topico a um topico|POST|
|'app.url/topicos/insertRelation'|idTopico, idsubTopico| |vincula um subtopico e um topicos já existentes um ao outro|POST|
|'app.url/topicos/get/all'  | -- | json com todos os  subtopicos | retorna todos os  subtopicos cadastrados| GET|
|'app.url/topicos/get'  | id (int)  | json de um subtopicos  | busca um subtopico especifico| GET|
|'app.url/topicos/edit'| nome,descricao,id(int)) | 'ok' | para editar um subtopicos | PUT|
|'app.url/topicos/delete'| id(int) | 'ok' | deleta um subtopicos do bd | DELETE|





# TABELAS :


usuarios (id SERIAL PRIMARY KEY      
    nome VARCHAR       
    email VARCHAR NOT NULL        
    senha VARCHAR NOT NULL      
    experiencia JSONB  
    caminhoAtual INTEGER  
    caminhoBack JSONB  
    caminhoFront JSONB);  
    
caminhos (id SERIAL PRIMARY KEY  
    nome VARCHAR  
    descricao VARCHAR  
    umeroTopicos INTEGER);  
    
topicos (id SERIAL PRIMARY KEY  
    nome varchar  
    descricao VARCHAR);  
    
subtopicos (id SERIAL PRIMARY KEY   
    nome VARCHAR   
    descricao VARCHAR  
    conteudo JSONB);  
    
caminhoContemTopico(id SERIAL   
    caminho INTEGER REFERENCES caminhos ON DELETE CASCADE        
    topico INTEGER REFERENCES topicos ON DELETE CASCADE   
    PRIMARY KEY (caminho,topico));   

topicoContemSubtopico(id SERIAL   
    topico INTEGER REFERENCES topicos ON DELETE CASCADE   
    subtopico INTEGER REFERENCES subtopicos ON DELETE CASCADE  
    PRIMARY KEY (topico,subtopico));   

feedbackSubtopico(id SERIAL PRIMARY KEY   
    usuario INTEGER REFERENCES usuarios ON DELETE CASCADE  
    subtopico INTEGER REFERENCES subtopicos ON DELETE CASCADE  
    criadoEm TIMESTAMP  
    editadoEm TIMESTAMP   
    conteudo VARCHAR) ;   

feedbackTopico(id SERIAL PRIMARY KEY   
    usuario INTEGER REFERENCES usuarios ON DELETE CASCADE    
    topico INTEGER REFERENCES topicos ON DELETE CASCADE    
    criadoEm TIMESTAMP   
    editadoEm TIMESTAMP   
    conteudo VARCHAR);   

feedbackCaminho(id SERIAL PRIMARY KEY   
    usuario INTEGER REFERENCES usuarios ON DELETE CASCADE  
    caminho INTEGER REFERENCES caminhos ON DELETE CASCADE   
    criadoEm TIMESTAMP  
    editadoEm TIMESTAMP  
    conteudo VARCHAR);  
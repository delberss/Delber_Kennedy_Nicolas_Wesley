var express = require('express');
var pool = require('./db');

var router = express.Router();


router.get('/', async (req, res) => {
  if (req.query.pword == "senha123") {
    const CREATE_TABLE =
    'CREATE TABLE usuarios (id SERIAL PRIMARY KEY, nome VARCHAR, email VARCHAR NOT NULL, '+
    'senha VARCHAR NOT NULL, experiencia JSONB, caminhoAtual INTEGER,caminhoBack JSONB,caminhoFront JSONB);'+
    'CREATE TABLE caminhos (id SERIAL PRIMARY KEY, nome VARCHAR, descricao VARCHAR, numeroTopicos INTEGER);'+
    'CREATE TABLE topicos (id SERIAL PRIMARY KEY, nome varchar, descricao VARCHAR);'+
    'CREATE TABLE subtopicos (id SERIAL PRIMARY KEY, nome VARCHAR, descricao VARCHAR, conteudo JSONB);'+
    'CREATE TABLE caminhoContemTopico(id SERIAL , caminho INTEGER REFERENCES caminhos ON DELETE CASCADE,'+
    'topico INTEGER REFERENCES topicos ON DELETE CASCADE, PRIMARY KEY (caminho,topico));'+
    'CREATE TABLE topicoContemSubtopico(id SERIAL , topico INTEGER REFERENCES topicos ON DELETE CASCADE,'+
    'subtopico INTEGER REFERENCES subtopicos ON DELETE CASCADE, PRIMARY KEY (topico,subtopico));'+
    'CREATE TABLE feedbackSubtopico(id SERIAL PRIMARY KEY, usuario INTEGER REFERENCES usuarios ON DELETE CASCADE,'+ 
    'subtopico INTEGER REFERENCES subtopicos ON DELETE CASCADE,  criadoEm TIMESTAMP, editadoEm TIMESTAMP, conteudo VARCHAR) ;'+
    'CREATE TABLE feedbackTopico(id SERIAL PRIMARY KEY, usuario INTEGER REFERENCES usuarios ON DELETE CASCADE,'+ 
    'topico INTEGER REFERENCES topicos ON DELETE CASCADE , criadoEm TIMESTAMP, editadoEm TIMESTAMP, conteudo VARCHAR);'
    'CREATE TABLE feedbackCaminho(id SERIAL PRIMARY KEY, usuario INTEGER REFERENCES usuarios ON DELETE CASCADE, '+
    'caminho INTEGER REFERENCES caminhos ON DELETE CASCADE, criadoEm TIMESTAMP, editadoEm TIMESTAMP, conteudo VARCHAR);';


    try {
      const client = await pool.connect();
      const result = await client.query(CREATE_TABLE);
      res.status(200).send('ok');
      client.release();
      console.log("db criada com sucesso");
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  }
  else {
    try {
      res.statusCode(401).send("nao autorizado");
    } catch (err) {
      res.send("errorfndb");
    }
  }
});

module.exports = router;
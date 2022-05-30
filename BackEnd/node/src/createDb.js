var express = require('express');
var pool = require('./db');

var router = express.Router();


router.get('/', async (req, res) => {
  if (req.body.pword == "senha123") {
    const CREATE_TABLE =
    'CREATE TABLE usuarios (id SERIAL PRIMARY KEY, nome VARCHAR, email VARCHAR NOT NULL, senha VARCHAR NOT NULL,'
        ' experiencia INTEGER, nivel INTEGER, caminhoAtual INTEGER, '
        ' caminhoFront jsonb, caminhoBack jsonb);'

    'CREATE TABLE caminhos (id SERIAL PRIMARY KEY, nome VARCHAR, descricao VARCHAR, numeroTopicos INTEGER);'

    'CREATE TABLE topicos (ID SERIAL PRIMARY KEY, nome varchar, descricao VARCHAR);'

    'CREATE TABLE subtopicos (ID SERIAL PRIMARY KEY, nome VARCHAR, descricao varchar);'

    'CREATE TABLE caminhoContemTopico(id SERIAL PRIMARY KEy, caminho INTEGER REFERENCES caminhoos,'
        'topico INTEGER REFERENCES topicos);'

    'CREATE TABLE topicoContemSubTopico(id SERIAL PRIMARY KEy, topico INTEGER REFERENCES topicos,'
        'subtopico INTEGER REFERENCES subtopicos);'

    'CREATE TABLE feedbackSubTopico(id SERIAL PRIMARY KEY, usuario INTEGER REFERENCES usuarios,'
        'subtopico INTEGER REFERENCES subtopicos ,  criadoEm DATETIME, editadoEm DATETIME);'

    'CREATE TABLE feedbackTopico(id SERIAL PRIMARY KEY, usuario INTEGER REFERENCES usuarios,'
        'topico INTEGER REFERENCES topicos , criadoEm DATETIME, editadoEm DATETIME);'

    'CREATE TABLE feedbackCaminho(id SERIAL PRIMARY KEY, usuario INTEGER REFERENCES usuarios,'
        ' caminho INTEGER REFERENCES caminhos, criadoEm DATETIME, editadoEm DATETIME);';

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
      res.send("error");
    }
  }
});

module.exports = router;
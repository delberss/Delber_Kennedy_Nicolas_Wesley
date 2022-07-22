var express = require('express');
var pool = require('./db');

var router = express.Router();


router.get('/', async (req, res) => {
   
    const CREATE_TABLE =
    'CREATE TABLE IF NOT EXISTSusuarios (id SERIAL PRIMARY KEY, nome VARCHAR NOT NULL, email VARCHAR UNIQUE, curso VARCHAR,'+
    'senha VARCHAR NOT NULL, experiencia INTEGER, caminhoAtual INTEGER,topicosConcluidos JSONB,subtopicosConcluidos JSONB);'+
    'CREATE TABLE IF NOT EXISTScaminhos (id SERIAL PRIMARY KEY, nome VARCHAR, descricao VARCHAR);'+
    'CREATE TABLE IF NOT EXISTStopicos (id SERIAL PRIMARY KEY, nome varchar NOT NULL, descricao VARCHAR);'+
    'CREATE TABLE IF NOT EXISTSsubtopicos (id SERIAL PRIMARY KEY, nome VARCHAR NOT NULL, descricao VARCHAR);'+
    'CREATE TABLE IF NOT EXISTSconteudos (id SERIAL PRIMARY KEY,tipo VARCHAR NOT NULL, link VARCHAR,titulo VARCHAR);'+
    'CREATE TABLE IF NOT EXISTScaminhoContemTopico(id SERIAL PRIMARY KEY , caminho INTEGER REFERENCES caminhos ON DELETE CASCADE,'+
    'topico INTEGER REFERENCES topicos ON DELETE CASCADE, UNIQUE (caminho,topico));'+
    'CREATE TABLE IF NOT EXISTStopicoContemSubtopico(id SERIAL PRIMARY KEY , topico INTEGER REFERENCES topicos ON DELETE CASCADE,'+
    'subtopico INTEGER REFERENCES subtopicos ON DELETE CASCADE, UNIQUE (topico,subtopico));'+
    'CREATE TABLE IF NOT EXISTSfeedbackSubtopico(id SERIAL PRIMARY KEY, usuario INTEGER REFERENCES usuarios ON DELETE CASCADE,'+ 
    'subtopico INTEGER REFERENCES subtopicos ON DELETE CASCADE,  criadoEm TIMESTAMP, editadoEm TIMESTAMP, conteudo VARCHAR) ;'+
    'CREATE TABLE IF NOT EXISTSfeedbackTopico(id SERIAL PRIMARY KEY, usuario INTEGER REFERENCES usuarios ON DELETE CASCADE,'+ 
    'topico INTEGER REFERENCES topicos ON DELETE CASCADE , criadoEm TIMESTAMP, editadoEm TIMESTAMP, conteudo VARCHAR);'
    'CREATE TABLE IF NOT EXISTSfeedbackCaminho(id SERIAL PRIMARY KEY, usuario INTEGER REFERENCES usuarios ON DELETE CASCADE, '+
    'caminho INTEGER REFERENCES caminhos ON DELETE CASCADE, criadoEm TIMESTAMP, editadoEm TIMESTAMP, conteudo VARCHAR);'+
    'CREATE TABLE IF NOT EXISTScaminhoContemConteudo (id SERIAL PRIMARY KEY,caminho INTEGER REFERENCES caminhos,'+
    ' conteudo INTEGER REFERENCES conteudos ON DELETE CASCADE, UNIQUE(caminho,conteudo));'+
    'CREATE TABLE IF NOT EXISTStopicoContemConteudo (id SERIAL PRIMARY KEY,topico INTEGER REFERENCES topicos,'+
    ' conteudo INTEGER REFERENCES conteudos ON DELETE CASCADE, UNIQUE(caminho,conteudo));'+
    'CREATE TABLE IF NOT EXISTSsubtopicoContemConteudo (id SERIAL PRIMARY KEY,subtopico INTEGER REFERENCES subtopicos,'+
    ' conteudo INTEGER REFERENCES conteudos ON DELETE CASCADE, UNIQUE(caminho,conteudo));';

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
 );

module.exports = router;
var express = require('express');
var pool = require('./db');

var router = express.Router();


// criar novo caminho
router.post('/insert', async (req, res) => {
  if (req.query.pword == "senha123") {

    var nome = req.body.nome == "" ? null : req.body.nome;
    var descricao = req.body.descricao == "" ? null : req.body.descricao;
    var numeroTopicos = req.body.numeroTopicos == "" ? null : req.body.numeroTopicos;

    var query = 'INSERT INTO caminhos(nome,descricao,numeroTopicos) ' +
      'VALUES ($1,$2,$3);';
    var values = [nome, descricao, numeroTopicos];

    try {
      const client = await pool.connect();
      const result = await client.query(query, values);

      res.status(200).send('ok');
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  }
  else {
    res.status(401).send('não autorizado' + req.query.pword);
  }
});

router.get('/get/all', async (req, res) => {
  if (req.query.pword == "senha123") {
    var id = req.body.id == "" ? null : req.body.id;
    const query = 'SELECT * FROM caminhos;';
    const values = [id];
    try {
      const client = await pool.connect();
      const resultado_query = await client.query(query, values);
      var resultado_final = resultado_query.rows;
      res.send(resultado_final);
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  }
  else {
    res.status(401).send("não autorizado");
  }
});

//TODO  precisa implementar essa aqui ainda
router.get('/get/topicos/all', async (req, res) => {
  if (req.query.pword == "senha123") {
    var id = req.body.id == "" ? null : req.body.id;
    const query = 'SELECT * FROM caminhos;';
    const values = [id];
    try {
      const client = await pool.connect();
      const resultado_query = await client.query(query, values);
      var resultado_final = resultado_query.rows;
      res.send(resultado_final);
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  }
  else {
    res.status(401).send("não autorizado");
  }
});

router.get('/get', async (req, res) => {
  if (req.query.pword == "senha123") {
    var id = req.body.id == "" ? null : req.body.id;
    const query = 'SELECT * FROM caminhos WHERE ID =$1;';
    const values = [id];
    try {
      const client = await pool.connect();
      const resultado_query = await client.query(query, values);
      var resultado_final = resultado_query.rows;
      res.send(resultado_final);
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  }
  else {
    res.status(401).send("não autorizado");
  }
});


//TODO
router.put('/edit', async (req, res) => {
  if (req.query.pword == "senha123") {
    var id = req.body.id == "" ? null : req.body.id;
    var nome = req.body.nome == "" ? null : req.body.nome;
    var descricao = req.body.descricao == "" ? null : req.body.descricao;
    var numeroTopicos = req.body.experiencia == "" ? null : req.body.experiencia;


    var query = 'UPDATE caminhos(nome,descricao,numeroTopicos) WHERE id = $1 ' +
      'VALUES ($1,$2,$3,$4);';
    var values = [id, nome, descricao, numeroTopicos];

    try {
      const client = await pool.connect();
      const result = await client.query(query, values);
      res.status(200).send('ok');
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }

  }
  else {
    res.status(401).send("não autorizado");
  }
});

//TODO
router.delete('/delete', async (req, res) => {
  if (req.query.pword == "senha123") {
    var id = req.body.id == "" ? null : req.body.id;
    if (id) //verifica se id tem um valor valido, se ele for null ou undefined isso aqui retorna falso
    {
      var query = "DELETE FROM caminhos WHERE id = $1;"
      var values = [id];
      try {
        const client = await pool.connect();
        const result = await client.query(query, values);
        res.status(200).send('ok');
        client.release();
      } catch (err) {
        console.error(err);
        res.send("Error " + err);
      }
    } else {
      res.send("error, invalid id");
    }
  }
  else {
    res.status(401).send("Não autorizado");
  }
});

module.exports = router;
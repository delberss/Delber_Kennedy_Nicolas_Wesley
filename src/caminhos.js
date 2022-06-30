var express = require('express');
var pool = require('./db');

var router = express.Router();


// criar novo caminho
router.post('/insert', async (req, res) => {
   

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

 );

router.get('/get/all', async (req, res) => {
   
   
    const query = 'SELECT * FROM caminhos;';
    
    try {
      const client = await pool.connect();
      const resultado_query = await client.query(query);
      var resultado_final = resultado_query.rows;
      res.send(resultado_final);
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  }
  
 );

router.get('/get/topicos', async (req, res) => {
   
    var idCaminho = req.query.idCaminho == "" ? null : req.query.idCaminho;
    const query = 'SELECT topicos.* FROM topicos JOIN caminhocontemtopico ON '+
    'topicos.id = caminhocontemtopico.topico WHERE caminhocontemtopico.caminho = $1;;';
    const values = [idCaminho];
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
  
 );

router.get('/get', async (req, res) => {
   
    var id = req.query.id == "" ? null : req.query.id;
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
  
 );



router.put('/edit', async (req, res) => {
   
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
  
 );


router.delete('/delete', async (req, res) => {
   
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

  
 );

module.exports = router;

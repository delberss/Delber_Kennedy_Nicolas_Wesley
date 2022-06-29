var express = require('express');
var pool = require('./db');

var router = express.Router();


// LOGIN
router.get('/login', async (req, res) => {

  var email = req.query.email == "" ? null : req.query.email;
  var senha = req.query.senha == "" ? null : req.query.senha;
 
  var query = 'SELECT * FROM usuarios WHERE email = $1 AND senha = $2;';
  var values = [email,senha];


  try {
    const client = await pool.connect();
    const result = await client.query(query, values);
    if(result.rowCount == 1){
      res.status(200).send(result.rows);
    }else{
    res.status(401).send('usuario inexistente');
    client.release();}
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}
 
 );


// criar novo usuario
router.post('/insert', async (req, res) => {

  var nome = req.body.nome == "" ? null : req.body.nome; 
  var email = req.body.email == "" ? null : req.body.email;
  var senha = req.body.senha == "" ? null : req.body.senha;
  var curso = req.body.curso == "" ? null : req.body.curso;
  var experiencia = req.body.experiencia == "" ? null : req.body.experiencia;
  var caminhoAtual = req.body.caminhoAtual == "" ? null : req.body.caminhoAtual;
  var caminhoFront = req.body.caminhoFront == "" ? null : req.body.caminhoFront;
  var caminhoBack = req.body.caminhoBack == "" ? null : req.body.caminhoBack;

 
  var query = 'INSERT INTO usuarios(nome, email, senha, experiencia, caminhoAtual,caminhoFront,'+
  ' caminhoBack,curso) VALUES ($1,$2,$3,$4,$5,$6,$7,$8);';
  var values = [nome,email,senha,experiencia,caminhoAtual,caminhoFront,caminhoBack,curso];

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
  
    const query = 'SELECT * FROM usuarios;';
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

router.get('/get', async (req, res) => {
 
    var id = req.query.id == "" ? null : req.query.id;
    const query = 'SELECT * FROM usuarios WHERE ID =$1;';
    const values = [id];
  try {
    const client = await pool.connect();
    const resultado_query = await client.query(query,values);
    var resultado_final = resultado_query.rows;
    res.send(resultado_final);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}
 
 );

router.get('/ranking/get', async (req, res) => {
  
    const query = 'SELECT nome,experiencia FROM usuarios ORDER BY experiencia DESC;';
  try {
    const client = await pool.connect();
    const resultado_query = await client.query(query);
    res.j
    res.send(resultado_query.rows);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}
 
 );


router.put('/edit', async (req, res) => {
  
  var nome = req.body.nome == "" ? null : req.body.nome;
  var id = req.body.id == "" ? null : req.query.id;
  var email = req.body.email == "" ? null : req.body.email;
  var senha = req.body.senha == "" ? null : req.body.senha;
  var experiencia = req.body.experiencia == "" ? null : req.body.experiencia;
  var caminhoAtual = req.body.caminhoAtual == "" ? null : req.body.caminhoAtual;
  var caminhoFront = req.body.caminhoFront == "" ? null : req.body.caminhoFront;
  var caminhoBack = req.body.caminhoBack == "" ? null : req.body.caminhoBack;
  var curso = req.body.curso == "" ? null : req.body.curso;

 
  var query = 'UPDATE usuarios SET nome =$1, email =$2, senha=$3, experiencia=$4, '+
  ' caminhoAtual=$5,caminhoFront=$6,curso = $7, caminhoBack=$8 WHERE id = $9;';
              
  var values = [nome,email,senha,experiencia,caminhoAtual,caminhoFront,curso,caminhoBack,id];

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
    var query = "DELETE FROM usuarios WHERE id = $1;"
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
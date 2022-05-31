var express = require('express');
var pool = require('./db');

var router = express.Router();


// LOGIN
router.get('/login', async (req, res) => {
  if(req.query.pword == "senha123")
  {
  var email = req.body.email == "" ? null : req.body.email;
  var senha = req.body.senha == "" ? null : req.body.senha;
 
  var query = 'SELECT * FROM usuarios WHERE email = $1 AND senha = $2;';
  var values = [email,senha];

  try {
    const client = await pool.connect();
    const result = await client.query(query, values);
    if(result.rowCount == 1){
      res.status(200).send(result.rows);
    }
    res.status(200).send('usuario inexistente');
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}
else{
  res.status(401).send("não autorizado");
}
});


// criar novo usuario
router.post('/insert', async (req, res) => {
  if(req.query.pword == "senha123")
  {
  var nome = req.body.nome == "" ? null : req.body.nome; 
  var email = req.body.email == "" ? null : req.body.email;
  var senha = req.body.senha == "" ? null : req.body.senha;
  var experiencia = req.body.experiencia == "" ? null : req.body.experiencia;
  var caminhoAtual = req.body.caminhoAtual == "" ? null : req.body.caminhoAtual;
  var caminhoFront = req.body.caminhoFront == "" ? null : req.body.caminhoFront;
  var caminhoBack = req.body.caminhoBack == "" ? null : req.body.caminhoBack;

 
  var query = 'INSERT INTO usuarios(nome, email, senha, experiencia, caminhoAtual,caminhoFront,'+
  ' caminhoBack) VALUES ($1,$2,$3,$4,$5,$6,$7);';
  var values = [nome,email,senha,experiencia,caminhoAtual,caminhoFront,caminhoBack];

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
else{
  res.status(401).send("não autorizado");
}
});

router.get('/get/all', async (req, res) => {
  if(req.query.pword == "senha123"){
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
else{
  res.status(401).send("não autorizado");
}
});

router.get('/get', async (req, res) => {
  if(req.query.pword == "senha123"){
    var id = req.body.id == "" ? null : req.body.id;
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
else{
  res.status(401).send("não autorizado");
}
});

router.get('/ranking/get', async (req, res) => {
  if(req.query.pword == "senha123"){
    const query = 'SELECT nome,experiencia FROM usuarios ORDER BY experiencia DESC;';
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
else{
  res.status(401).send("não autorizado");
}
});


router.put('/edit', async (req, res) => {
  if(req.query.pword == "senha123"){
  var nome = req.body.nome == "" ? null : req.body.nome;
  var id = req.body.id == "" ? null : req.body.id;
  var email = req.body.email == "" ? null : req.body.email;
  var senha = req.body.senha == "" ? null : req.body.senha;
  var experiencia = req.body.experiencia == "" ? null : req.body.experiencia;
  var nivel = req.body.nivel == "" ? null : req.body.nivel;
  var caminhoAtual = req.body.caminhoAtual == "" ? null : req.body.caminhoAtual;
  var caminhoFront = req.body.caminhoFront == "" ? null : req.body.caminhoFront;
  var caminhoBack = req.body.caminhoBack == "" ? null : req.body.caminhoBack;

 
  var query = 'UPDATE usuarios SET nome =$1, email =$2, senha=$3, experiencia=$4, nivel=$5,'+
  ' caminhoAtual=$6,caminhoFront=$7, caminhoBack=$8 WHERE id = $9'+
                'VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9);';
  var values = [nome,email,senha,experiencia,nivel,caminhoAtual,caminhoFront,caminhoBack,id];

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
else{
  res.status(401).send("não autorizado");
}
});


router.delete('/delete', async (req, res) => {
  if(req.query.pword == "senha123"){
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
  else{
    res.status(401).send("Não autorizado");
  }
});

module.exports = router;
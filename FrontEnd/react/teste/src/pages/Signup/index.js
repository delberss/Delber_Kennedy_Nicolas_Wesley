import React, { useState } from "react";
import "./styles.css"

import { useNavigate } from "react-router-dom";

function Signup() {

  const handleSubmit = (e) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");


    var urlencoded = new URLSearchParams();
    urlencoded.append("nome", e.target.nome.value);
    urlencoded.append("email", e.target.email.value);
    urlencoded.append("senha", e.target.password.value);
    urlencoded.append("experiencia", "0");
    urlencoded.append("caminhoAtual", "1");


    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    fetch("https://trabalhoengsw.herokuapp.com/usuarios/insert?pword=senha123", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    e.preventDefault();
    navigate("/jornadas");
  };

  const handleBack = (e) => {
    e.preventDefault()
    navigate("/jornadas");
  }

  const navigate = useNavigate();

  return (
    <div className="content">
      <div id="signup">
        <h1 className="title">Cadastro do Sistema</h1>
        <form className="form" onSubmit={handleSubmit}>

          <div className="field">
            <label htmlFor="nome">Nome completo</label>
            <input type="nome" name="nome" placeholder="Digite seu nome" id="nome" />
          </div>

          <div className="field">
            <label htmlFor="curso">Curso</label>
            <input type="curso" name="curso" placeholder="Digite seu curso" id="curso" />
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Digite seu e-mail" id="email" />
          </div>

          <div className="field">
            <label htmlFor="Password">Senha</label>
            <input type="password" name="password" placeholder="Digite sua senha" id="password" />
          </div>

          <div className="actions">
            <button type="submit" >Cadastrar</button>
            <button type="submit" onClick={handleBack}>Voltar</button>
          </div>
        </form>


      </div>
    </div>
  );
}

export default Signup;
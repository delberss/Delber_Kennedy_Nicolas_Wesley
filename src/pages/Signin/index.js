import React, { useState } from "react";
import "./styles.css"

import { useNavigate } from "react-router-dom"

function Signin() {
    const handleSubmit = (e) => {

        

var requestOptions = {
  method: 'GET',
  
  redirect: 'follow'
};

fetch("https://trabalhoengsw.herokuapp.com/usuarios/login?pword=senha123&email=joaquim@joaquimcom&senha=12345", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

        e.preventDefault();
        navigate("/formulario1");
    };

    const handleBack = (e) => {
        e.preventDefault()
        navigate("/jornadas");
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    return (
        <div className="content">
            <div id="signin">
                <h1 className="title">Login do Sistema</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Digite seu e-mail" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="field">
                        <label htmlFor="Password">Senha</label>
                        <input type="password" name="password" placeholder="Digite sua senha" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className="actions">
                        <button type="submit">Entrar</button>
                        <button type="submit" onClick={handleBack}>Voltar</button>
                    </div>
                </form>

            </div>
        </div>


    )
}

export default Signin;

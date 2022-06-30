import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Signin(props) {

    const [email, setEmail] = useState();
    const [password, setSenha] = useState();
    const [usuario, setUsuario] = useState();

    const navigate = useNavigate();

    const loga = async () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            mode: 'cors'
        };

        var url = "https://trabalhoengsw.herokuapp.com/usuarios/login?senha=";
        url = url + password;
        url = url + "&email=";
        url = url + email;
        await fetch(url, requestOptions)
            .then(response => response.text())
            .then(result => (result == "usuario inexistente") ? console.log('falhou') : setUsuario(result))
            .catch(error => console.log('error', error));

       
       
//       props.changeUser(usuario);
        console.log(usuario);

        console.log(JSON.parse(usuario)[0]['id']);
        
      if(JSON.parse(usuario)[0]['id'] != -1){
        console.log('entrou');
        navigate('/formulario1', {user :usuario});
      }

    }

    const handleBack = (e) => {
        e.preventDefault()
        navigate("/jornadas");
      }


    return (
        <div className="content">
            <div id="signin">
                <h1 className="title">LOGIN DO SISTEMA</h1>
                <form className="form" >
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Digite seu e-mail" id="email" value={email}
                            onChange={(e) => {setEmail(e.target.value) }} />
                    </div>

                    <div className="field">
                        <label htmlFor="Password">Senha</label>
                        <input type="password" name="password" placeholder="Digite sua senha" id="password" value={password}
                            onChange={(e) => {setSenha(e.target.value)}} />
                    </div>
                    <div className="actions">
                        <button type="button" onClick={() => loga()}>Entrar</button>
                        <button type="submit" onClick={handleBack}>Voltar</button>
                    </div>
                </form>

            </div>
        </div>
    )

}

export default Signin;

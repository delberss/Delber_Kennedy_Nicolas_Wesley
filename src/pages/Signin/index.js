import React, {useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Signin() {

    const [email, setEmail] = useState();
    const [password, setSenha] = useState();
    const [sucesso, setSucesso] = useState();


    const navigate = useNavigate();

    const loga = async () => {
        setSucesso( false);
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            mode: 'cors'
        };
        
        var url = "https://trabalhoengsw.herokuapp.com/usuarios/login?senha=";
        url = url + password;
        url = url + "&email=";
        url = url + email;

        fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => (result == "usuario inexistente") ? (alert('email/senha invalidos'),setSucesso(false)) : (window.sessionStorage.setItem("usuario",result),setSucesso(true)))
        .catch(error => console.log('error', error));
        if(sucesso){
        navigate('/');
      }
    }

    

    const handleBack = (e) => {
        e.preventDefault()
        navigate("/");
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

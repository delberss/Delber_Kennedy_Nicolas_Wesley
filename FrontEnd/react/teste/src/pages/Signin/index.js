import React, {useState} from "react";
import "./styles.css"
import '../../Content/styles.css'

import {useNavigate} from "react-router-dom"

function Signin(){
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/formulario1");
    };

    const handleBack = (e) => {
        e.preventDefault()
        navigate("/jornadas");
    }
    
    return(
        <div className="content">
            <div id="signin">
                <h1 className="title">Login do Sistema</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Digite seu e-mail" id="email" value={email} onChange={(e) => setEmail(e.target.value) }/>
                    </div>

                    <div className="field">
                        <label htmlFor="Password">Senha</label>
                        <input type="password" name="password" placeholder="Digite sua senha" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
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
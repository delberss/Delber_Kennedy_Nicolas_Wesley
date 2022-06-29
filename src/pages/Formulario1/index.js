import React, { useState } from "react";
import '../../Content/styles.css'
import "./styles.css";

import {useNavigate} from "react-router-dom"

function Formulario1(props){
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/jornadas", {user : props.user});
    };
    const [user,setUser] = useState();

    setUser(props.user);
    

    console.log('form');
    console.log(user);
    console.log(user[0]['id']);
    console.log(user[0]['nome']);

    return(
        
        <div className="content">
            <div className="formulario1"  onSubmit={handleSubmit}>

                <div className="question">
                    <label>1. Qual o seu nível de conhecimento em programação?</label>

                    <div className="radio">
                        <label>
                            <input type="radio" name="conhecimentoProg" value="basico" /> Básico
                        </label>

                        <label>
                            <input type="radio" name="conhecimentoProg" value="intermediário" /> Intermediário
                        </label>

                        <label>
                            <input type="radio" name="conhecimentoProg" value="avancado" /> Avançado
                        </label>

                    </div>
                </div>

                <div className="question">
                    <label>2. Você tem interesse sobre backend?</label>

                    <div className="radio">
                        <label>
                            <input type="radio" name="conhecimentoBackend" value="basico" /> Nenhum
                        </label>

                        <label>
                            <input type="radio" name="conhecimentoBackend" value="intermediário" /> Médio
                        </label>

                        <label>
                            <input type="radio" name="conhecimentoBackend" value="avancado" /> Alto
                        </label>

                    </div>

                </div>

                <div className="question">
                    <label>3. Você tem interesse sobre frontend?</label>

                    <div className="radio">
                        <label>
                            <input type="radio" name="conhecimentoFrontend" value="basico" /> Nenhum
                        </label>

                        <label>
                            <input type="radio" name="conhecimentoFrontend" value="intermediário" /> Médio
                        </label>

                        <label>
                            <input type="radio" name="conhecimentoFrontend" value="avancado" /> Alto
                        </label>

                    </div>

                </div>
                
                <button className="buttonEnviar" onClick={handleSubmit}>ENVIAR</button>
            </div>
            
        </div>
    )
}

export default Formulario1;
import React, { useState } from "react";
import '../../Content/styles.css'
import "./styles.css";

import {useNavigate} from "react-router-dom"

function Formulario1(props){
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/", {user : props.user});
    };
    const [user,setUser] = useState(JSON.parse(window.sessionStorage.getItem("usuario")));

    return(
        
        <div className="content">
            <div className="btn_voltar" onClick={() => { this.volta() }}>
                <span className="material-symbols-outlined">arrow_back</span>
            </div>

            <div className="formulario1"  onSubmit={handleSubmit}>


                <div className="question">
                    <label className="pergunta">1. Qual o seu nível de conhecimento em programação?</label>

                    <div className="radio">
                        <label className="label_form">
                            <input type="radio" name="conhecimentoProg" value="basico" /> Básico
                        </label>

                        <label className="label_form">
                            <input type="radio" name="conhecimentoProg" value="intermediário" /> Intermediário
                        </label>

                        <label className="label_form">
                            <input type="radio" name="conhecimentoProg" value="avancado" /> Avançado
                        </label>

                    </div>
                </div>

                <div className="question">
                    <label className="pergunta">2. Você tem interesse sobre backend?</label>

                    <div className="radio">
                        <label className="label_form">
                            <input type="radio" name="conhecimentoBackend" value="basico" /> Nenhum
                        </label>

                        <label className="label_form">
                            <input type="radio" name="conhecimentoBackend" value="intermediário" /> Médio
                        </label>

                        <label className="label_form">
                            <input type="radio" name="conhecimentoBackend" value="avancado" /> Alto
                        </label>

                    </div>

                </div>

                <div className="question">
                    <label className="pergunta">3. Você tem interesse sobre frontend?</label>

                    <div className="radio">
                        <label className="label_form">
                            <input type="radio" name="conhecimentoFrontend" value="basico" /> Nenhum
                        </label>

                        <label className="label_form">
                            <input type="radio" name="conhecimentoFrontend" value="intermediário" /> Médio
                        </label>

                        <label className="label_form">
                            <input type="radio" name="conhecimentoFrontend" value="avancado" /> Alto
                        </label>

                    </div>

                </div>
                
                <button id="buttonFormulario" onClick={handleSubmit}>ENVIAR</button>
            </div>
            
        </div>
    )
}

export default Formulario1;
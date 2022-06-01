import React from "react";
import '../../Content/styles.css'
import "./styles.css";

import {useNavigate} from "react-router-dom"

function Formulario1(){
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/jornadas");
    };


    return(
        <div className="content">
            <div className="formulario1"  onSubmit={handleSubmit}>
                <div className="question">
                    <label>1. Qual o seu nível de conhecimento em programação?</label>

                    <div className="radio">
                        <label>
                            <input type="radio" name="nivelProg"
                    value="basico" /> Básico
                        </label>
                    </div>

                    <div className="radio">
                        <label>
                            <input type="radio" name="nivelProg"
                    value="intermediário" /> Intermediário
                        </label>
                    </div>

                    <div className="radio">
                        <label>
                            <input type="radio" name="nivelProg"
                    value="avancado" /> Avançado
                        </label>
                    </div>
                </div>

                <div className="question">
                    <label>2. Qual o seu nível de conhecimento em programação?</label>

                    <div className="radio">
                        <label>
                            <input type="radio" name="nivelProg"
                    value="basico" /> Básico
                        </label>
                    </div>

                    <div className="radio">
                        <label>
                            <input type="radio" name="nivelProg"
                    value="intermediário" /> Intermediário
                        </label>
                    </div>

                    <div className="radio">
                        <label>
                            <input type="radio" name="nivelProg"
                    value="avancado" /> Avançado
                        </label>
                    </div>
                </div>

                <div className="question">
                    <label>3. Qual o seu nível de conhecimento em programação?</label>

                    <div className="radio">
                        <label>
                            <input type="radio" name="nivelProg"
                    value="basico" /> Básico
                        </label>
                    </div>

                    <div className="radio">
                        <label>
                            <input type="radio" name="nivelProg"
                    value="intermediário" /> Intermediário
                        </label>
                    </div>

                    <div className="radio">
                        <label>
                            <input type="radio" name="nivelProg"
                    value="avancado" /> Avançado
                        </label>
                    </div>
                </div>
                
                <button onClick={handleSubmit}>Enviar</button>
            </div>
            
        </div>
    )
}

export default Formulario1;
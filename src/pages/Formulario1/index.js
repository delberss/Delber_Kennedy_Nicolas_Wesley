import React, { useState } from "react";
import '../../Content/styles.css'
import "./styles.css";

import { useNavigate } from "react-router-dom"


function Formulario1(props) {
    const [r, setR] = useState(false);
    
    const atualizaUserDb = (usr) => {
        //console.log('fn atualizauserdb');
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("nome", usr[0]['nome']);
        urlencoded.append("id", usr[0]['id']);
        urlencoded.append("email", usr[0]['email']);
        urlencoded.append("senha", usr[0]['senha']);
        urlencoded.append("experiencia", usr[0]['experiencia']);
        urlencoded.append("caminhoAtual", usr[0]['caminhoatual']);
        urlencoded.append("topicosConcluidos", JSON.stringify(usr[0]['topicosconcluidos']));
        urlencoded.append("subtopicosConcluidos", JSON.stringify(usr[0]['subtopicosconcluidos']));
        urlencoded.append("curso", usr[0]['curso']);
        // console.log('ca='+usr[0]['caminhoatual']);

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow',
            mode: 'cors'
        };

        fetch("https://trabalhoengsw.herokuapp.com/usuarios/edit", requestOptions)
            .then(response => response.text())
            .then(result => { console.log('result =' + result); result == 'ok' ? setR(true) : setR(false) })
            .catch(error => (console.log('error', error), alert("erro de conexão, tente novamente")));

    }
    const alteraCaminho = (usr, caminhoEscolhido) => {
    
        let caminho = caminhoEscolhido <= 0 ? 1 : 2;
        // console.log('cam es = '+caminhoEscolhido);
        // console.log('caminho = ' + caminho);
        usr[0]['caminhoatual'] = caminho;

        window.sessionStorage.setItem("usuario", JSON.stringify(usr));
        atualizaUserDb(usr);

    }

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        // var a = parseInt(document.querySelector('input[name="conhecimentoProg"]:checked').value);
        // var b = parseInt(document.querySelector('input[name="conhecimentoBackend"]:checked').value);
        // var c = parseInt(document.querySelector('input[name="conhecimentoFrontend"]:checked').value);

        var a = parseInt(p1);
        var b = parseInt(p2);
        var c = parseInt(p3);
        //e.preventDefault();
        alteraCaminho(user, a + b + c)
        if (r) {
            navigate("/");
        }
        else{
            console.log('r = false');
        }
    }


    const [user, setUser] = useState(JSON.parse(window.sessionStorage.getItem("usuario")));
    const [p1,setP1]= useState(-1);
    const [p2,setP2]= useState(-1);
    const [p3,setP3]= useState(-1);

    const handlechange1=(e)=>{
        setP1(e.target.value);
    }

    const handlechange2=(e)=>{
        setP2(e.target.value);
    }

    const handlechange3=(e)=>{
        setP3(e.target.value);
    }


    return (

        <div className="content">
            <div className="btn_voltar" onClick={() => { this.volta() }}>
                <span className="material-symbols-outlined">arrow_back</span>
            </div>

            <div className="formulario1" onSubmit={handleSubmit}>


                <div className="question">
                    <label className="pergunta">1. Qual o seu nível de conhecimento em programação?</label>

                    <div className="radio" onChange={handlechange1}>
                        <label className="label_form">
                            <input type="radio"  name="conhecimentoProg" value={-1} /> Básico
                        </label>

                        <label className="label_form">
                            <input type="radio" name="conhecimentoProg" value={0} /> Intermediário
                        </label>

                        <label className="label_form">
                            <input type="radio" name="conhecimentoProg" value={1} /> Avançado
                        </label>

                    </div>
                </div>

                <div className="question">
                    <label className="pergunta">2. Você tem interesse sobre backend?</label>

                    <div className="radio" onChange={handlechange2}>
                        <label className="label_form">
                            <input type="radio"  name="conhecimentoBackend" value={-1} /> Nenhum
                        </label>

                        <label className="label_form">
                            <input type="radio" name="conhecimentoBackend" value={0} /> Médio
                        </label>

                        <label className="label_form">
                            <input type="radio" name="conhecimentoBackend" value={1} /> Alto
                        </label>

                    </div>

                </div>

                <div className="question">
                    <label className="pergunta">3. Você tem interesse sobre frontend?</label>

                    <div className="radio" onChange={handlechange3}>
                        <label className="label_form">
                            <input type="radio"  name="conhecimentoFrontend" value={-1} /> Nenhum
                        </label>

                        <label className="label_form">
                            <input type="radio" name="conhecimentoFrontend" value={0} /> Médio
                        </label>

                        <label className="label_form">
                            <input type="radio" name="conhecimentoFrontend" value={1} /> Alto
                        </label>

                    </div>

                </div>

                <button id="buttonFormulario" onClick={handleSubmit}>ENVIAR</button>
            </div>

        </div>
    )
}

export default Formulario1;
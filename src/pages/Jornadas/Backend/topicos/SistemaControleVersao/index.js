import React, { Component } from "react";
import Header from "../../../../../Header/Header";
import '../../../../Jornadas/styleTopico.css'

class SistemaControleVersao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            frontend: [],
            backend: []
        }
    }

    componentDidMount() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            mode: 'cors'
        };

        fetch("https://trabalhoengsw.herokuapp.com/caminhos/get/topicos?idCaminho=1", requestOptions)
            .then(response => response.text())
            .then(result => {
                this.setState({ backend: JSON.parse(result) })
            })
            .catch(error => console.log('error', error));
    }



    render() {
        return(
                <>
                <Header />
                <div className="content">
                    <h2>SISTEMAS DE CONTROLE DE VERSÃO</h2>
                    <div className="voltar">
                        <a  href="/jornadaback">
                            <span class="material-symbols-outlined">arrow_back</span>
                        </a>
                    </div>
                    <div className="subtopicos">

                        <div className="checkbox">
                            <label>
                                <input type="checkbox" name="p1_sistemaControleVersao" value="p1_sistemaControleVersao" /> Introdução ao sistema de controle de versão
                            </label>

                            <label>
                                <input type="checkbox" name="p2_sistemaControleVersao" value="p2_sistemaControleVersao" /> Curso intensivo de Git e GitHub para iniciantes
                            </label>

                            <label>
                                <input type="checkbox" name="p3_sistemaControleVersao" value="p3_sistemaControleVersao" /> Aprenda Git em 20 minutos
                            </label>
                        </div>

                        <div className="dicas">
                            <label>
                                <a href="https://www.youtube.com/watch?v=zbKdDsNNOhg&ab_channel=Udacity" target="_blank">Assista sobre</a>
                            </label>

                            <label>
                                <a href="https://www.youtube.com/watch?v=SWYqp7iY_Tc&ab_channel=TraversyMedia" target="_blank">Assista sobre</a>
                            </label>

                            <label>
                                <a href="https://www.youtube.com/watch?t=21&v=Y9XZQO1n_7c&feature=youtu.be&ab_channel=CodeInsights" target="_blank">Assista sobre</a>
                            </label>
                        </div>
                        
                    </div>
                    
                </div>
                </>
        );
    }
}



export default SistemaControleVersao;


import React, { Component } from "react";
import Header from "../../../../../Header/Header";
import '../../../../Jornadas/styleTopico.css'

class ConhecimentoBasicoFront extends Component {
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
                    <h2>CONHECIMENTO BÁSICO DE FRONTEND</h2>
                    <div className="voltar">
                        <a  href="/jornadaback">
                            <span class="material-symbols-outlined">arrow_back</span>
                        </a>
                    </div>
                    <div className="subtopicos">

                        <div className="checkbox">
                            <label>
                                <input type="checkbox" name="p1_conhecimentoBasicoFront" value="p1_conhecimentoBasicoFront" /> W3Schools: Aprenda HTML
                            </label>

                            <label>
                                <input type="checkbox" name="p2_conhecimentoBasicoFront" value="p2_conhecimentoBasicoFront" /> W3Schools: Aprenda CSS
                            </label>

                            <label>
                                <input type="checkbox" name="p3_conhecimentoBasicoFront" value="p3_conhecimentoBasicoFront" /> W3Schools: Tutorial de JavaScript
                            </label>
                        </div>

                        <div className="dicas">
                            <label>
                                <a href="https://www.w3schools.com/html/html_intro.asp" target="_blank">Leia sobre</a>
                            </label>

                            <label>
                                <a href="https://www.w3schools.com/css/" target="_blank">Leia sobre</a>
                            </label>

                            <label>
                                <a href="https://www.w3schools.com/js/" target="_blank">Leia sobre</a>
                            </label>
                        </div>
                        
                    </div>
                    
                </div>
                </>
        );
    }
}



export default ConhecimentoBasicoFront;


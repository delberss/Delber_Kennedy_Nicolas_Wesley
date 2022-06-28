import React, { Component } from "react";
import Header from "../../../../../Header/Header";
import '../../../../Jornadas/styleTopico.css'

class BancoNoSQL extends Component {
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
                    <h2>BANCO DE DADOS NOSQL</h2>
                    <div className="voltar">
                        <a  href="/jornadaback">
                            <span class="material-symbols-outlined">arrow_back</span>
                        </a>
                    </div>
                    <div className="subtopicos">

                        <div className="checkbox">
                            <label>
                                <input type="checkbox" name="p1_bancoNoSQL" value="p1_bancoNoSQL" /> Comandos SQL
                            </label>

                            <label>
                                <input type="checkbox" name="p2_bancoNoSQL" value="p2_bancoNoSQL" /> Comandos SQL
                            </label>

                            <label>
                                <input type="checkbox" name="p3_bancoNoSQL" value="p3_bancoNoSQL" /> Comandos SQL
                            </label>

                            <label>
                                <input type="checkbox" name="p4_bancoNoSQL" value="p4_bancoNoSQL" /> Comandos SQL
                            </label>
                        </div>

                        <div className="dicas">
                            <label>
                                <a href="#">Estude</a>
                            </label>

                            <label>
                                <a href="#">Estude</a>
                            </label>

                            <label>
                                <a href="#">Estude</a>
                            </label>

                            <label>
                                <a href="#">Estude</a>
                            </label>
                           
                        </div>
                        
                    </div>
                    
                </div>
                </>
        );
    }
}



export default BancoNoSQL;


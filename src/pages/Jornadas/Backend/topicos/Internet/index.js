import React, { Component } from "react";
import Header from "../../../../../Header/Header";
import '../../../../Jornadas/styleTopico.css'

class Internet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subtopicos: []
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
                this.setState({ subtopicos: JSON.parse(result) })
            })
            .catch(error => console.log('error', error));
    }

    usuariosJsonToList() {
        const userList = [];
        for (let i = 0; i < this.state.usuarios.length; i++) {

        }
    }

    render() {
        return(
                <>
                <Header />
                <div className="content">
                    <h2>INTERNET</h2>
                    <div className="voltar">
                        <a  href="/jornadaback">
                            <span class="material-symbols-outlined">arrow_back</span>
                        </a>
                    </div>
                    <div className="subtopicos">

                        <div className="checkbox">
                            <label>
                                <input type="checkbox" name="p1_internet" value="p1_internet" /> Comandos SQL
                            </label>

                            <label>
                                <input type="checkbox" name="p2_internet" value="p2_internet" /> Comandos SQL
                            </label>

                            <label>
                                <input type="checkbox" name="p3_internet" value="p3_internet" /> Comandos SQL
                            </label>

                            <label>
                                <input type="checkbox" name="p4_internet" value="p4_internet" /> Comandos SQL
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



export default Internet;


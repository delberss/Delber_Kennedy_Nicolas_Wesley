import React, { Component } from "react";
import Header from "../../../Header/Header";
import Footer from '../../../Footer/Footer';
import '../../Jornadas/styleJornada.css'

class Frontend extends Component {
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

        fetch("https://trabalhoengsw.herokuapp.com/caminhos/get/topicos?idCaminho=2", requestOptions)
            .then(response => response.text())
            .then(result => {
                this.setState({ frontend: JSON.parse(result) })
            })
            .catch(error => console.log('error', error));
    }

    frontJsonToList() {
        const frontList = [];
        for (let i = 0; i < this.state.frontend.length; i++) {
            let id = this.state.frontend[i]['id'];
            let nome = this.state.frontend[i]['nome'];
            let ref = "";
            if(nome == 'Internet') 
                ref = "/jornadafront/internet"

            if(nome == 'Sistemas de Controle de Versão') 
                ref = "/jornadafront/sistemaControleVersao"

            frontList.push(
                <a href={ref}>
                    <li key={id}>{nome}</li>
                </a>
            );
        }
        return frontList;
    }

    render() {
        return(
            <div>
                <Header/>
                <div className="content">
                    <h2>Frontend</h2>
                    <div className="voltar">
                        <a  href="/jornadas">
                            <span class="material-symbols-outlined">arrow_back</span>
                        </a>
                    </div>
                    <div className="topico">
                        <ul>
                            {this.frontJsonToList()}
                        </ul>
                    </div>
                    
                </div>
                <Footer/>
            </div>
            
        );
    }
}



export default Frontend;
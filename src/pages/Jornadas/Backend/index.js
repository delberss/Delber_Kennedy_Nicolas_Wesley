import React, { Component } from "react";
import Header from "../../../Header/Header";
import Footer from '../../../Footer/Footer';
import '../../Jornadas/styleJornada.css'

class Backend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            frontend: [],
            backend: [],
            user: props.user
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

    backJsonToList() {
        const backList = [];
        for (let i = 0; i < this.state.backend.length; i++) {
            let id = this.state.backend[i]['id'];
            let nome = this.state.backend[i]['nome'];
            let ref = "";
            if(nome == 'Internet') 
                ref = "/jornadaback/internet"
            if(nome == 'Bancos de Dados NoSQL') 
                ref = "/jornadaback/bancoNoSQL"

            backList.push(
                <a href={ref}>
                    <li key={id}>{nome}</li>
                </a>
            );
        }
        return backList;
    }

    render() {
    
        return(
                <>
                <Header/>
                <div className="content">
                    <h2>Backend</h2>
                    <div className="voltar">
                        <a  href="/jornadas">
                            <span class="material-symbols-outlined">arrow_back</span>
                        </a>
                    </div>
                    <div className="topico">
                        <ul>
                            {this.backJsonToList()}
                        </ul>
                    </div>
                    
                </div>
                <Footer/>
                </>
        );
    }
}



export default Backend;
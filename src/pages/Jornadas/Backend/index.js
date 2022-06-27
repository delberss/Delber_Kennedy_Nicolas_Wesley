import React, { Component } from "react";
import './style.css'
import Header from "../../../Header/Header";
import Footer from '../../../Footer/Footer';
import '../../../Content/styles.css'

class Backend extends Component {
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

    backJsonToList() {
        const backList = [];
        for (let i = 0; i < this.state.backend.length; i++) {
            let id = this.state.backend[i]['id'];
            let nome = this.state.backend[i]['nome'];
            backList.push(
                <a  href="#">
                    <li key={id}>{nome}</li>
                </a>
            );
        }
        return backList;
    }

    render() {
        return(
            <div>
                <Header/>
                <div className="content">
                    <h2>Backend</h2>
                    <div className="backend">
                        <ul>
                            {this.backJsonToList()}
                        </ul>
                    </div>
                    
                </div>
                <Footer/>
            </div>
            
        );
    }
}



export default Backend;


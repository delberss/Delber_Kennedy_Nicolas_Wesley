import React, { Component } from "react";
import './style.css'
import Header from "../../../Header/Header";
import Footer from '../../../Footer/Footer';
import '../../../Content/styles.css'

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
            frontList.push(
                <a  href="#">
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
                    <div className="frontend">
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


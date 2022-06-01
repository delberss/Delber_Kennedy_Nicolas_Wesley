import React, { Component } from "react";
import Header from "../../Header/Header";
import Footer from '../../Footer/Footer';
import "../Ranking/styles.css"

class Ranking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuarios: []
        }
    }

    componentDidMount() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            mode: 'cors'
        };

        fetch("https://trabalhoengsw.herokuapp.com/usuarios/ranking/get?pword=senha123", requestOptions)
            .then(response => response.text())
            .then(result => {
                this.setState({ usuarios: JSON.parse(result) })
            })
            .catch(error => console.log('error', error));
    }

    usuariosJsonToList() {
        const userList = [];
        for (let i = 0; i < this.state.usuarios.length; i++) {
            let nome = this.state.usuarios[i]['nome'];
            let xp = this.state.usuarios[i]['experiencia'];
            userList.push(<li key={i}>Nome = {nome}, xp = {xp}</li>);
        }
        return userList;
    }

    render() {

        return (<div>
            <Header />
            <div className="content">
                <div>
                    <h2>RANKING</h2>
                </div>


                <ul>  {this.usuariosJsonToList()}</ul>

            </div>
            <Footer />
        </div>
        );
    }
}


export default Ranking;
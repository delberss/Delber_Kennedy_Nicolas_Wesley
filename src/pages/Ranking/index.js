import React, { Component } from "react";
import Header from "../../Header/Header";
import Footer from '../../Footer/Footer';
import "../Ranking/styles.css";

class Ranking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuarios: [],
            user : props.user
        }
        console.log('ranking');
        console.log(this.state.user[0]['id']);
    }

    componentDidMount() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            mode: 'cors'
        };

        fetch("https://trabalhoengsw.herokuapp.com/usuarios/ranking/get", requestOptions)
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
            if(i ==0){
                userList.push(
                    <tr key={i}>
                        <td className="rank" id="first">{i+1}
                            <span className="material-symbols-outlined">workspace_premium</span>
                        </td>
                        <td className="team">{nome}</td>
                        <td className="points">{xp}</td>
                    </tr>
                );
            }
            else if(i==1){
                userList.push(
                    <tr key = {i}>
                        <td className="rank" id="second">{i+1}
                            <span className="material-symbols-outlined">workspace_premium</span>
                        </td>
                        <td className="team">{nome}</td>
                        <td className="points">{xp}</td>
                    </tr>
                );
            }
            else if(i==2){
                userList.push(
                    <tr key = {i}>
                        <td className="rank" id="third">{i+1}
                            <span className="material-symbols-outlined">workspace_premium</span>
                        </td>
                        <td className="team">{nome}</td>
                        <td className="points">{xp}</td>
                    </tr>
                );
            }
            
            else{
                userList.push(
                    <tr key ={i}>
                        <td className="rank">{i+1}</td>
                        <td className="team">{nome}</td>
                        <td className="points">{xp}</td>
                    </tr>
                );
            }
            
        }
        return userList;
    }

    render() {

        return (<div>
            <Header user = {this.props.user} />
            <div className="content">
            <div className="container_ranking">
                    <header>
                        <h1>RANKING TOP 20</h1>
                    </header>
                    <div className="wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>Rank</th>
                                    <th>Nome</th>
                                    <th>Pontos</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.usuariosJsonToList()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        );
    }
}


export default Ranking;

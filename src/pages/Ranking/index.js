import React, { Component } from "react";
import Header from "../../Header/Header";
import Footer from '../../Footer/Footer';
import "../Ranking/styles.css";

class Ranking extends Component {
    constructor(props) {

        super(props);
        this.state = {
            usuarios: [],
            user : window.sessionStorage.getItem("usuario"),
        }
        // console.log('ranking');
        // console.log(JSON.parse(this.state.user)[0]['nome']);
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
                        <td className="pos_rank" id="first">{i+1}
                            <span className="material-symbols-outlined">workspace_premium</span>
                        </td>
                        <td className="nome_rank">{nome}</td>
                        <td className="pts_rank">{xp} pts<br></br> <span className="nivel">{this.calculoNivel(xp)}</span></td>
                    </tr>
                );
            }
            else if(i==1){
                userList.push(
                    <tr key = {i}>
                        <td className="pos_rank" id="second">{i+1}
                            <span className="material-symbols-outlined">workspace_premium</span>
                        </td>
                        <td className="nome_rank">{nome}</td>
                        <td className="pts_rank">{xp} pts<br></br> <span className="nivel">{this.calculoNivel(xp)}</span></td>
                    </tr>
                );
            }
            else if(i==2){
                userList.push(
                    <tr key = {i}>
                        <td className="pos_rank" id="third">{i+1}
                            <span className="material-symbols-outlined">workspace_premium</span>
                        </td>
                        <td className="nome_rank">{nome}</td>
                        <td className="pts_rank">{xp} pts<br></br> <span className="nivel">{this.calculoNivel(xp)}</span></td>
                    </tr>
                );
            }
            else if(i == 20){
                break;
            }
            else{
                userList.push(
                    <tr key ={i}>
                        <td className="pos_rank">{i+1}</td>
                        <td className="nome_rank">{nome}</td>
                        <td className="pts_rank">{xp} pts <br></br> <span className="nivel">{this.calculoNivel(xp)}</span></td>
                    </tr>
                );
            }
            
        }
        return userList;
    }

    calculoNivel(xp)
    {   //console.log('nivel ='+ this.state.nivel);
        if(xp == 0 || xp == 1)
        {
            return 'Nível: ' + 1    ;

        }
        let y = 1773009 + (0.8691453 - 1773009)/(1 + (xp/82323.29)**1.442783)
        let x = Math.floor(y/1) ;
        return 'Nível: ' + x ;
    }

    render() {
        return (<div>
            <Header user = {this.props.user} />
            <div className="content">
            <div className="container_ranking">
                    <header>
                        <h2>RANKING TOP 20</h2>
                    </header>
                    <div className="wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>Rank</th>
                                    <th className="th_name">Nome</th>
                                    <th className="th_pts">Pontos (Nível)</th>
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
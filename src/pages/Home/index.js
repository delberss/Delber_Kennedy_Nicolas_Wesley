import React, { Component } from "react";
import Header from "../../Header/Header";
import Footer from '../../Footer/Footer';
import '../../Content/styles.css'
import './styles.css'
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usuario: window.sessionStorage.getItem("usuario"),
            logado: false,
            nome: "",
            codcaminhoAtual: -1,
            strcaminhoatual: ""
        }
        if (this.state.usuario != null) {
            this.state.usuario = JSON.parse(this.state.usuario);
            if (this.state.usuario[0]['id'] === -1) {
                this.state.logado = false;
            }
            else {
                this.state.logado = true;
                this.state.nome = this.state.usuario[0]['nome'];
                this.state.codcaminhoAtual = this.state.usuario[0]['caminhoatual'];

                if (this.state.codcaminhoAtual == 1) {
                    this.state.strcaminhoatual = "BackEnd";
                }
                if (this.state.codcaminhoAtual == 2) {
                    this.state.strcaminhoatual = "FrontEnd";
                }
            }
            console.log(this.state.strcaminhoatual);
        };
    }

    opcaoDeJornada() {
        console.log("entrei na opcao!");
        if (this.state.strcaminhoatual == "BackEnd") {
            return (
                <>
                    <Link className="box-backend" to={{
                        pathname: '/jornadas?page=b'                        
                    }}><strong>Backend</strong></Link>     
                </>
            )
        }
        else {
            return (
                <>
                    <Link className="box-frontend" to={{
                        pathname: '/jornadas?page=f'                        
                    }}><strong>FrontEnd</strong></Link>     
                </>
            )
        }

    }

    render() {
        return (
            <div>
                <Header />
                <div className="content">
                    {this.state.logado &&

                        <div className="box_home">
                            <h2>HOME</h2>
                            <h3 className="bemVindoHome">Seja bem-vindo(a), <i className="nameUser">{this.state.nome}</i></h3>
                            <h3 className="jornadaIndicada">Jornada de estudo indicada:</h3>

                            <div className="jornadasHome">
                                <div className="jornadas">
                                    {this.opcaoDeJornada()}
                                </div>
                            </div>
                        </div>}
                    {!this.state.logado &&
                        <div className="box_home">
                            <h2>HOME</h2>
                            <h3 className="facaLogin" >Faça o seu login!</h3>
                        </div>}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;
import React, { Component } from "react";
import Header from "../../Header/Header";
import Footer from '../../Footer/Footer';
import '../../Content/styles.css'

class Home extends Component{
    constructor(props)
    {   super(props)
        this.state = {
            usuario: window.sessionStorage.getItem("usuario"),
            logado: false,
            nome : "",
            codcaminhoAtual : -1,
            strcaminhoatual : ""
        }
        if(this.state.usuario != null){
            this.state.usuario = JSON.parse(this.state.usuario);
        if (this.state.usuario[0]['id'] === -1) {
            this.state.logado = false;
        }
        else {
            this.state.logado = true;
            this.state.nome = this.state.usuario[0]['nome'];
            this.state.codcaminhoAtual = this.state.usuario[0]['caminhoatual'];

            if(this.state.codcaminhoAtual == 1)
            {
                this.state.strcaminhoatual = "BackEnd";
            }
            if(this.state.codcaminhoAtual == 2)
            {
                this.state.strcaminhoatual = "FrontEnd";
            }
        }
        console.log(this.state.strcaminhoatual);
    };
    }
    
    render(){
        return(
        <div>
            <Header />  
            <div className="content">
                {this.state.logado &&<div className="box">
                    <h2>HOME</h2>
                    <h3>BEM-VINDO {this.state.nome}</h3>
                    <h4>A sua jornada de estudos atual é {this.state.strcaminhoatual}</h4>
                </div>}
                {!this.state.logado &&<div className="box">
                    <h2>HOME</h2>
                </div>}
            </div>
            <Footer/>
        </div>
    );}
}

export default Home;
import React, { Component } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Ranking from '../pages/Ranking'
import Jornadas from '../pages/Jornadas'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import Formulario1 from '../pages/Formulario1'

import Backend from '../pages/Jornadas/Backend'
import Frontend from '../pages/Jornadas/Frontend'

import InternetBack from '../pages/Jornadas/Backend/topicos/Internet'
import SistemaControleVersaoBack from '../pages/Jornadas/Backend/topicos/SistemaControleVersao'
import BancoNoSQL from '../pages/Jornadas/Backend/topicos/BancoNoSQL'
import ConhecimentoBasicoFront from '../pages/Jornadas/Backend/topicos/ConhecimentoBasicoFrontend'

import InternetFront from '../pages/Jornadas/Frontend/topicos/Internet'
import SistemaControleVersaoFront from '../pages/Jornadas/Frontend/topicos/SistemaControleVersao'


class Rotas extends Component {
    constructor(props) {
        super(props);
        this.changeUser = this.changeUser.bind(this);
        this.state = {
            user: [{"id":-1,"nome":"teste","email":"teste@teste.com","curso":"","senha":"","experiencia":0,"caminhoatual":-1,"caminhoback":{},"caminhofront":{}}],
            
        }
    }


    changeUser(valor) {
        this.setState({ user: valor });
        console.log('bbbb');
        console.log(this.user);
    }
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' exact element={<Home user={this.state.user} />} />
                    <Route path='/sobre' element={<Sobre user={this.state.user} />} />
                    <Route path='/ranking' element={<Ranking user={this.state.user} />} />
                    <Route path='/jornadas' element={<Jornadas user={this.state.user} />} />
                    <Route path='/signin' element={<Signin user={this.state.user} changeUser={this.changeUser} />} />
                    <Route path='/signup' element={<Signup user={this.state.user} />} />
                    <Route path='/formulario1' element={<Formulario1 user={this.state.user} />} />
                    
                    <Route path='/jornadaback' element={<Backend  user={this.state.user} />} />
                
                    <Route path='/jornadaback/internet' element={<InternetBack  user={this.state.user} />} />
                    <Route path='/jornadaback/sistemaControleVersao' element={<SistemaControleVersaoBack  user={this.state.user} />} />
                    <Route path='/jornadaback/conhecimentoBasicoFront' element={<ConhecimentoBasicoFront  user={this.state.user} />} />
                    <Route path='/jornadaback/bancoNoSQL' element={<BancoNoSQL  user={this.state.user} />} />


                    <Route path='/jornadafront' element={<Frontend  user={this.state.user} />} />

                    <Route path='/jornadafront/internet' element={<InternetFront  user={this.state.user} />} />
                    <Route path='/jornadafront/sistemaControleVersao' element={<SistemaControleVersaoFront  user={this.state.user} />} />
                </Routes>

            </BrowserRouter>
        )
    }
}

export default Rotas;
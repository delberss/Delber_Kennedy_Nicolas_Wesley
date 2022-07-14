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
        this.state = {
            user: [{"id":-1,"nome":"teste","email":"teste@teste.com","curso":"","senha":"","experiencia":0,"caminhoatual":-1,"caminhoback":{},"caminhofront":{}}],
            
        }
        if(window.sessionStorage.getItem("usuario") == null)
        {

            window.sessionStorage.setItem("usuario",JSON.stringify(this.state.user));
        }
    }



    render() {
       
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' exact element={<Home   />} />
                    <Route path='/sobre' element={<Sobre   />} />
                    <Route path='/ranking' element={<Ranking   />} />
                    <Route path='/jornadas' element={<Jornadas   />} />
                    <Route path='/signin' element={<Signin   />} />
                    <Route path='/signup' element={<Signup   />} />
                    <Route path='/formulario1' element={<Formulario1   />} />
                    
                    <Route path='/jornadaback' element={<Backend    />} />
                
                    <Route path='/jornadaback/internet' element={<InternetBack    />} />
                    <Route path='/jornadaback/sistemaControleVersao' element={<SistemaControleVersaoBack    />} />
                    <Route path='/jornadaback/conhecimentoBasicoFront' element={<ConhecimentoBasicoFront    />} />
                    <Route path='/jornadaback/bancoNoSQL' element={<BancoNoSQL    />} />


                    <Route path='/jornadafront' element={<Frontend    />} />

                    <Route path='/jornadafront/internet' element={<InternetFront    />} />
                    <Route path='/jornadafront/sistemaControleVersao' element={<SistemaControleVersaoFront    />} />
                </Routes>

            </BrowserRouter>
        )
    }
}

export default Rotas;
import React from 'react'

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Ranking from '../pages/Ranking'
import Jornadas from '../pages/Jornadas'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import Formulario1 from '../pages/Formulario1'
import Backend from '../pages/Jornadas/Backend'
import Frontend from '../pages/Jornadas/Frontend'

import Internet from '../pages/Jornadas/Backend/topicos/Internet'
import BancoNoSQL from '../pages/Jornadas/Backend/topicos/BancoNoSQL'


function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Home/>} />
                <Route path='/sobre' element={<Sobre/>} />
                <Route path='/ranking' element={<Ranking/>} />
                <Route path='/jornadas' element={<Jornadas/>} />
                <Route path='/signin' element={<Signin/>} />
                <Route path='/signup' element={<Signup/>} />
                <Route path='/formulario1' element={<Formulario1/>} />
                <Route path='/jornadaback' element={<Backend/>} />
                <Route path='/jornadafront' element={<Frontend/>} />

                
                <Route path='/jornadaback/internet' element={<Internet/>} />
                <Route path='/jornadaback/bancoNoSQL' element={<BancoNoSQL/>} />

            </Routes>
            
        </BrowserRouter>
    )
}

export default Rotas;
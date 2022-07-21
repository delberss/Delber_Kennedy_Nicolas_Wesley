import React from "react";
import Header from "../../Header/Header";
import Footer from '../../Footer/Footer';
import "./styles.css";
import '../../Content/styles.css'



function Sobre(props){
    return(
        <div>
            <Header user = {props.user}/>
            
            <div className="content">
                <div className="sobre">
                    <h2>SOBRE NOSSO SISTEMA</h2>
                    <p>
                    Um sistema gamificado que irá auxiliar os estudantes da área de computação
                    da UFJF com um caminho para se desenvolverem como programadores, pois mediante
                    a várias informações, muitos estudantes não sabem por qual caminho seguir, 
                    assim nosso projeto tem o objetivo de incentivá-los a estudarem determinadas
                    linguagens e ferramentas tecnológicas. Cada etapa/ferramenta contará pontos na plataforma.
                    </p>

                    <div class="social-medias">
                        <h2 className="contato">ACESSE NOSSO GITHUB</h2>
                        <ul>
                        
                            <li>
                                <a href="https://github.com/delberss/Delber_Kennedy_Nicolas_Wesley" rel="noopener noreferrer" target={"_blank"}><i class="fa fa-github"></i></a>
                            </li>
                        </ul>
                    </div>

                </div>

                
            </div>
            
            <Footer/>
        </div>
        
    );
}

export default Sobre
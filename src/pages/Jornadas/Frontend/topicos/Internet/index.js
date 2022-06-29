import React, { Component } from "react";
import Header from "../../../../../Header/Header";
import '../../../../Jornadas/styleTopico.css'

class Internet extends Component {
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

        fetch("https://trabalhoengsw.herokuapp.com/caminhos/get/topicos?idCaminho=1", requestOptions)
            .then(response => response.text())
            .then(result => {
                this.setState({ backend: JSON.parse(result) })
            })
            .catch(error => console.log('error', error));
    }



    render() {
        return(
                <>
                <Header />
                <div className="content">
                    <h2>INTERNET</h2>
                    <div className="voltar">
                        <a  href="/jornadafront">
                            <span class="material-symbols-outlined">arrow_back</span>
                        </a>
                    </div>
                    <div className="subtopicos">

                        <div className="checkbox">
                        <label>
                                <input type="checkbox" name="p1_internet" value="p1_internet" /> A Internet explicada
                            </label>

                            <label>
                                <input type="checkbox" name="p2_internet" value="p2_internet" /> Como funciona a Internet
                            </label>

                            <label>
                                <input type="checkbox" name="p3_internet" value="p3_internet" /> Introdução à Internet
                            </label>

                            <label>
                                <input type="checkbox" name="p4_internet" value="p4_internet" /> Como funciona a Internet
                            </label>

                            <label>
                                <input type="checkbox" name="p5_internet" value="p5_internet" /> Como a Internet funciona em 5 minutos
                            </label>
                        </div>

                        <div className="dicas">
                        <label>
                                <a href="https://www.vox.com/2014/6/16/18076282/the-internet" target="_blank">Leia sobre</a>
                            </label>

                            <label>
                                <a href="http://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm" target="_blank">Leia sobre</a>
                            </label>

                            <label>
                                <a href="https://roadmap.sh/guides/what-is-internet" target="_blank">Assista sobre</a>
                            </label>

                            <label>
                                <a href="https://www.youtube.com/watch?v=x3c1ih2NJEg&ab_channel=Lesics" target="_blank">Assista sobre</a>
                            </label>

                            <label>
                                <a href="https://www.youtube.com/watch?v=7_LPdttKXPc&ab_channel=Aaron" target="_blank">Assista sobre</a>
                            </label>
                           
                        </div>
                        
                    </div>
                    
                </div>
                </>
        );
    }
}



export default Internet;

